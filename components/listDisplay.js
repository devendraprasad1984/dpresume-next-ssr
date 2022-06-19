import React, {useEffect, useState} from 'react'
import styles from '../styles/common.module.scss'
import getFromApi from "../apis/get";

const ListDisplay = ({url}) => {
    const [pageData, setPageData] = useState([])
    useEffect(() => {
        getFromApi(url, (res) => {
            setPageData(res)
        })
    }, [])

    if (!pageData) return null
    if (pageData.length === 0) return null

    return <ul className={styles.ul}>
        {pageData.map((line, id) => {
            return <li key={`line-${id}`}>{line}</li>
        })}
    </ul>
}

export default ListDisplay