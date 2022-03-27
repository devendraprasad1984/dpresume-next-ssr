import PropTypes from "prop-types";
import React, {useState} from "react";

import HtmlComponent from "./htmlComponent";
import {TTS} from "../../configs/config";

const _tts = new TTS()
const BasicDisplay = ({ list, tag, className, time }) => {
  const [isSpeaking, setIsSpeaking]=useState(false)

  const display = (data) => {
    return data.map((row, index) => {
      return (
        <div key={"key-" + index}>
          <HtmlComponent text={row} />
        </div>
      );
    });
  };

  const displayByList = () => {
    if (list === undefined) return null;
    if (list.length === 0) return null;
    return display(list);
  };

  const handleSpeak=()=>{
    if(isSpeaking){
      _tts.stopSpeaking()
      setIsSpeaking(false)
    }else{
      _tts.speakOut(list);
      setIsSpeaking(true)
    }
  }

  return (<React.Fragment>
    <div className='right'>Computed: fetched in <span className='xprimary'>{time}ms</span>, rendered in: <span className='xprimary'>0</span></div>
    <div className={className}>
      <button className='btn xwhite primary' onClick={()=>handleSpeak()}>{!isSpeaking ? 'Speak' : 'Stop Speaking'}</button>
      <div className="bl xprimary">{tag || ""}</div>
      {displayByList()}
    </div>
  </React.Fragment>);
};
BasicDisplay.propTypes = {
  list: PropTypes.array.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
  time: PropTypes.any
};

export default React.memo(BasicDisplay);
