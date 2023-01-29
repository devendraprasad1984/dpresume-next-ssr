import React, {useCallback, useEffect, useState} from "react";

import {config} from "../../configs/config";

import NoData from "./nodata";
import useAPI from "../../hooks/useAPI";

const BottomBar = (props) => {
    const [links, setLinks] = useState([]);
    const {data, loading, error} = useAPI(config.endpoints.LINKS);
    useEffect(() => {
        setLinks(data);
    }, [data]);

    const displayLinks = useCallback(() => {
        const linksKey = Object.keys(links);
        const linksValues = Object.values(links);
        if (linksKey.length === 0) return null;
        return linksKey.map((link, index) => {
            return (
                <a
                    className='btn primary'
                    href={linksValues[index]}
                    target="_blank"
                    key={"link-key-" + index}
                >
                    {link}
                </a>
            );
        });
    }, [links]);

    if (loading) return <NoData text={config.messages.PLZ_WAIT}/>;
    if (error) return <NoData text={config.messages.ERROR}/>;
    return <div className="flexbox">{displayLinks()}</div>;
};
export default React.memo(BottomBar);
