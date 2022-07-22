import PropTypes from "prop-types";
import React, { useState } from "react";

import OneLinerHeader from "../common/oneLinerHeader";
import useAPI from "../../hooks/useAPI";
import { config, getMyIP } from "../../configs/config";
import NoData from "../common/nodata";
import { postData } from "../../apis/post";

const maxLen = 500;
const AddFeedback = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e, name) => {
    let value = e.target.value;

    if (name === "title") setTitle(value);
    if (name === "desc") setDesc(value);
  };

  const handleSave = () => {
    let payload = { dpFeedbackSave: 1, title, desc };
    console.log(payload);
    postData(config.endpoints.justDB, payload, (res) => {
      console.log("res", res);
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
  const { data } = props;
  if (!data || data.length === 0) return null;
  return (
    <div className="height400">
      {data.map((row, i) => {
        return (
          <div className="row size10" key={`row-${i}`}>
            <span className="wid20">{row.time}</span>
            <span className="wid20">{row.title}</span>
            <span className="wid100">{row.feedback}</span>
            <span className="wid5">{1 === 2 ? "self" : null}</span>
          </div>
        );
      })}
    </div>
  );
};

const Feedback = (props) => {
  const { data, loading, error, time } = useAPI(config.endpoints.FEEDBACK);
  // console.log("__IP", config.myip());

  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;

  return (
    <div>
      <OneLinerHeader title={props.title + ` (${data.length})`} />
      <AddFeedback />
      <DisplayFeedback data={data} />
    </div>
  );
};
Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
export default React.memo(Feedback);
