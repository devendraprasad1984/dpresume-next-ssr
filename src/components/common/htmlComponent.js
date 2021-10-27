import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";

const HtmlComponent = ({text, children}) => {
    return (
        <div
            dangerouslySetInnerHTML={{__html: `${config.chars.pointArrow} ${text || children}`}}
        />
    )
}
HtmlComponent.propTypes = {
    text: PropTypes.string,
}

export default HtmlComponent;
