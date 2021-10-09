import React from "react";

const Modalify = (props) => {
  const { children, header, id, show, close } = props;
  return (
    <div
      className={"modal-wrapper " + (show ? "show" : "hide")}
      id={id + "-wrapper"}
    >
      <div className="modal-content">
        <div className="right">
          <button
            className="btn danger margin-ud"
            id={id + "-close"}
            onClick={close}
          >
            close
          </button>
        </div>
        <h2>{header}</h2>
        <div className="text">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
Modalify.prototype = {};
export default Modalify;
