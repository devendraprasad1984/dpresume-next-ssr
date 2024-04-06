import PropTypes from "prop-types";
import React from "react";

import OneLinerHeader from "../common/oneLinerHeader";

const Canada = (props) => {
    return (
        <div>
            <OneLinerHeader title={props.title}/>
            <div>CANADA EXPRESS ENTRY PROFILE Application: E002299537</div>
            <div className='xinfo'>Unique Client Identifier (UCI): CAN000100086210</div>
            <div>WES Ref: 5099000IMM, Aug’21</div>
            <div>IELTS General: 010708, Aug’21<br/>
                <span className='xred'>(S=7.5, R=7.5, W=7, L=6) =7</span>
            </div>
        </div>
    );
};
Canada.propTypes = {
    title: PropTypes.string.isRequired,
};
export default React.memo(Canada);
