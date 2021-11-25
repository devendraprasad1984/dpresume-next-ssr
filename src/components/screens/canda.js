import PropTypes from "prop-types";
import React from "react";

import OneLinerHeader from "../common/oneLinerHeader";

const Canada = (props) => {
    return (
        <div>
            <OneLinerHeader title={props.title} />
        </div>
    );
};
Canada.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Canada;
