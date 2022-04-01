import PropTypes from "prop-types";
import React, {useState} from "react";

import HtmlComponent from "./htmlComponent";
import {TTS} from "../../configs/config";

const _tts = new TTS()
const BasicDisplay = ({ list, tag, className, time, loadTime }) => {
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
    <div className='right'>
      fetched in {time && <span className='xprimary'>{time}ms</span>}
      {loadTime && "rendered in"}
      {loadTime && <span className='xprimary'>{loadTime}ms</span>}
    </div>
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
  time: PropTypes.any,
  loadTime: PropTypes.any
};

export default React.memo(BasicDisplay);
