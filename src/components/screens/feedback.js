import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import OneLinerHeader from "../common/oneLinerHeader";
import useAPI from "../../hooks/useAPI";
import { config, getMyIP } from "../../configs/config";
import NoData from "../common/nodata";
import { postData } from "../../apis/post";

const maxLen = 500;
const AddFeedback = (props) => {
  const { ip, onSave } = props;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e, name) => {
    let value = e.target.value;

    if (name === "title") setTitle(value);
    if (name === "desc") setDesc(value);
  };

  const handleSave = () => {
    let payload = { dpFeedbackSave: 1, title, desc, ip: ip.data.ipAddress };
    postData(config.endpoints.justDB, payload, (res) => {
      if (res.data.status !== "success") return;
      onSave(true);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title/name/description/summary or leave blank"
        value={title}
        onChange={(e) => handleChange(e, "title")}
      />
      <textarea
        rows={5}
        placeholder="Enter your valuable feedback here"
        maxLength={maxLen}
        value={desc}
        onChange={(e) => handleChange(e, "desc")}
      />
      <div className="right">
        <span>
          {" "}
          {desc.length} / {maxLen} chars
        </span>
        <button className="btn primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

const DisplayFeedback = (props) => {
  const { ip, toggleStateChangeOnSave } = props;
  const [refreshCounter, setRefreshCounter] = useState(0);

  const handleRefresh = () => {
    setRefreshCounter((x) => x + 1);
  };

  const { data, loading, error, time } = useAPI(
    config.endpoints.FEEDBACK,
    refreshCounter
  );
  const handleDeleteSelfFeedback = (id) => {
    let payload = { dpFeedbackDelete: 1, id };
    postData(config.endpoints.justDB, payload, (res) => {
      if (res.data.status !== "success") return;
      setRefreshCounter((x) => x + 1);
    });
  };

  useEffect(() => {
    handleRefresh();
  }, [toggleStateChangeOnSave]);

  if (!data || data.length === 0) return null;
  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;

  return (
    <div className="height400">
      <div className="xprimary">{data.length} feedback(s) found</div>
      {data.map((row, i) => {
        return (
          <div className="gridLine" key={`row-${i}`}>
            <div className="row">
              <span className="wid60 bl size12 xJellyBean">{row.time}</span>
              <span
                className={`wid40 size10 ${!row.title ? "xred" : "xsuccess"}`}
              >
                {!row.title ? "Anonymous" : row.title}
              </span>
            </div>
            <div className="row">
              <span className="size12">{row.feedback}</span>
            </div>
            <div className="right">
              {ip && (
                <span className="">
                  {row.ip === ip.data.ipAddress ? (
                    <span
                      className="badge danger"
                      onClick={() => handleDeleteSelfFeedback(row.id)}
                    >
                      Delete
                    </span>
                  ) : null}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Feedback = (props) => {
  const [myIp, setMyIp] = useState("");
  const [toggleStateChangeOnSave, setOnSave] = useState(false);

  useEffect(() => {
    getMyIP((res) => {
      setMyIp(res);
    });
  }, []);

  const handleOnSave = (flag) => {
    setOnSave(!toggleStateChangeOnSave);
  };

  return (
    <div className="margin-ud wid95">
      <OneLinerHeader title={props.title} />
      <AddFeedback ip={myIp} onSave={handleOnSave} />
      <DisplayFeedback
        ip={myIp}
        toggleStateChangeOnSave={toggleStateChangeOnSave}
      />
    </div>
  );
};
Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
export default React.memo(Feedback);
