import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import OneLinerHeader from "../common/oneLinerHeader";
import useAPI from "../../hooks/useAPI";
import { config, getMyIP } from "../../configs/config";
import NoData from "../common/nodata";
import { postData } from "../../apis/post";

const maxLen = 500;
const AddFeedback = (props) => {
  const { ip } = props;

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
      alert("saved");
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
  const { ip, refresh } = props;
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
      alert("deleted");
    });
  };

  if (!data || data.length === 0) return null;
  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;

  return (
    <div className="height400">
      <button onClick={handleRefresh}>Refresh</button>

      <div>{data.length} records found</div>
      {data.map((row, i) => {
        return (
          <div className="gridLine" key={`row-${i}`}>
            <div className="row">
              <span className="wid70 bl size12">{row.time}</span>
              <span className="size8">{row.title}</span>
            </div>
            <div className="row">
              <span className="wid100 size10">{row.feedback}</span>
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

  useEffect(() => {
    getMyIP((res) => {
      setMyIp(res);
    });
  }, []);

  return (
    <div className="wid100">
      <OneLinerHeader title={props.title} />
      <AddFeedback ip={myIp} />
      <DisplayFeedback ip={myIp} />
    </div>
  );
};
Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
export default React.memo(Feedback);
