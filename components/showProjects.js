import React, {useEffect, useState} from "react";
import getFromApi from "../apis/get";
import styles from "../styles/common.module.scss";
import config from "../config";


const ShowProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getFromApi(config.endpoints.projects, (res) => {
            setProjects(res)
        })
    }, [])

    if (!projects) return null
    const projectKeys = Object.keys(projects)
    return <>
        {projectKeys.filter(key => projects[key].length !== 0).map((line, id) => {
            return <div>
                <div className={styles.size30} key={`line-${id}`}>{line}</div>
                {typeof projects[line] === 'object' && projects[line].map(d => {
                    return <div className={[styles.column, styles.marginUD].join(' ')}>
                        <div className={styles.size20}>{d.name}</div>
                        <div className={styles.size15}>{d.desc}</div>
                    </div>
                })}
                {typeof projects[line] === 'string' && projects[line]}
            </div>
        })}
    </>
}

export default ShowProjects