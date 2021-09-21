import PropTypes from "prop-types";
import React from "react";

import OneLinerHeader from "../common/oneLinerHeader";

const Notes = (props) => {
  return (
    <div>
      <OneLinerHeader title={props.title} />
      <iframe
        title="my_notes"
        src="https://drive.google.com/file/d/1rOr4G8if6mjdYkOdUZPorGMgDkvBJu6K/preview"
        allow="autoplay"
        width="100%"
        height="560px"
      ></iframe>
    </div>
  );
};
Notes.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Notes;
