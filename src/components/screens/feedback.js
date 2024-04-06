import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";

import OneLinerHeader from "../common/oneLinerHeader";
import useAPI from "../../hooks/useAPI";
import {config, getMyIP} from "../../configs/config";
import NoData from "../common/nodata";
import {postData} from "../../apis/post";

const maxLen = 500;
const AddFeedback = (props) => {
    const {ip, onSave} = props;

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleChange = (e, name) => {
        let value = e.target.value;

        if (name === "title") setTitle(value);
        if (name === "desc") setDesc(value);
    };

    const resetForm=()=>{
        setTitle('')
        setDesc('')
    }

    const handleSave = () => {
        let payload = {dpFeedbackSave: 1, title, desc, ip: ip.ipAddress};
        postData(config.endpoints.justDB, payload, (res) => {
            const isSuccess=(res.status === "success")
            if(!isSuccess){
                alert('error saving a record.')
                return
            }
            resetForm()
            onSave(isSuccess);
        });
    };

    return (
        <div className='col'>
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
    const {ip, toggleStateChangeOnSave, setOnSave} = props;

    const {data, loading, error, time} = useAPI(
        config.endpoints.FEEDBACK,
        !toggleStateChangeOnSave
    );
    const handleDeleteSelfFeedback = (id) => {
        let payload = {dpFeedbackDelete: 1, id};
        postData(config.endpoints.justDB, payload, (res) => {
            setOnSave(!toggleStateChangeOnSave)
        });
    };

    if (!data || data.length === 0) return null;
    if (loading) return <NoData text={config.messages.PLZ_WAIT}/>;
    if (error) return <NoData text={config.messages.ERROR}/>;

    return (
        <React.Fragment>
            <div className="xprimary size20">{data.length} feedback(s) found</div>
            <div className="">
                {data.map((row, i) => {
                    return (
                        <div className="gridLine" key={`row-${i}`}>
                            <div className="row">
                                <span className="wid60 bl size12 xJellyBean">{row.time}</span>
                                <span
                                    className={`wid40 size10 ${!row.title ? "xred" : "xsuccess"}`}
                                >
                  {!row.title ? "Anonymous" : row.title}
                </span>
                            </div>
                            <div className="row">
                                <span className="size15">{row.feedback}</span>
                            </div>
                            <div className="right">
                                {ip && (
                                    <span className="">
                    {row.ip === ip.ipAddress ? (
                        <button
                            className="badge danger margin-ud"
                            onClick={() => handleDeleteSelfFeedback(row.id)}
                        >
                        Delete
                      </button>
                    ) : null}
                  </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

const Feedback = (props) => {
    const [myIp, setMyIp] = useState("");
    const [toggleStateChangeOnSave, setOnSave] = useState(false);

    useEffect(() => {
        getMyIP((res) => {
            setMyIp(res);
        });
    }, []);

    const handleOnSave = (flag) => {
        setOnSave(!toggleStateChangeOnSave);
    };

    return (
        <div className="margin-ud wid95">
            <OneLinerHeader title={props.title}/>
            <AddFeedback ip={myIp} onSave={handleOnSave}/>
            <DisplayFeedback
                ip={myIp}
                toggleStateChangeOnSave={toggleStateChangeOnSave}
                setOnSave={setOnSave}
            />
        </div>
    );
};
Feedback.propTypes = {
    title: PropTypes.string.isRequired,
};
export default React.memo(Feedback);
