import React from "react";

const Modalify = (props) => {
  const { children, header, tagid, show, close } = props;
  return (
    <div
      className={"modal-wrapper " + (show ? "show" : "hide")}
      id={tagid + "-wrapper"}
    >
      <div className="modal-content">
        <div className="right">
          <button
            className="btn danger margin-ud"
            id={tagid + "-close"}
            onClick={close}
          >
            close
          </button>
        </div>
        <h2>{header}</h2>
        <div className="text">
          {children}
        </div>
      </div>
    </div>
  );
};
Modalify.prototype = {};
export default Modalify;
