import PropTypes from "prop-types";
import React, {useCallback} from "react";

import {config} from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import HtmlComponent from "../common/htmlComponent";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";
import ShowCompute from "../common/showCompute";

const Projects = (props) => {
    const {data, loading, error, time} = useAPI(config.endpoints.PROJECTS);

    const displayDetails = useCallback((arr) => {
        let isArrayOfString = arr.filter(x => typeof x === 'string').length === arr.length
        if (isArrayOfString) {
            return arr.map((row, i) => {
                return <div key={'row' + i}><HtmlComponent text={row} /></div>
            })
        } else {
            return arr.map((row, i) => {
                let {name, desc} = row;
                return (
                    <div key={"inside-proj-row" + i} className="margin-rl size15">
                        <h3 className="xprimary">{name}</h3>
                        <p className="margin-rl">{desc}</p>
                    </div>
                );
            });
        }
    }, []);

    const display = useCallback(() => {
        if (data.length === 0) return null;

        let keys = Object.keys(data);
        let values = Object.values(data);
        return keys.map((name, i) => {
            let obj = values[i];
            // debugger
            let isString = typeof obj === "string";
            let isObject = typeof obj === "object";
            let isLen = obj.length > 0;
            if (!isLen) return null;
            return (
                <div key={"proj_" + i}>
                    <div className='size20'>{name}</div>
                    {isString && isLen ? <p>{obj}</p> : null}
                    {isObject && !isString && isLen ? displayDetails(obj) : null}
                </div>
            );
        });
    }, [data]);

    if (loading) return <NoData text={config.messages.PLZ_WAIT}/>;
    if (error) return <NoData text={config.messages.ERROR}/>;
    return (
        <div className={"margin-ud"}>
            <ShowCompute time={time}/>
            <OneLinerHeader title={props.title}/>
            {display()}
        </div>
    );
};
export default React.memo(Projects);

Projects.propTypes = {
    title: PropTypes.string.isRequired,
};
