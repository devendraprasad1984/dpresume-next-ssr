import React, { useState, useEffect } from "react";

const Nav = (props) => {
    let pageLength = props.pages || 0;
    let [pages, setPages] = useState([]);
    let [curPage, setCurPage] = useState(-1);

    const handleClickPage = (curpage) => {
        setCurPage((p) => curpage);
    };
    const handleKeyDown = (e) => {
        //track on left key, cur-1
        //check boundary conditions here on left (<0) and right (>max)
        //track on right key, cur+1
    };
    const displayPages = (num) => {
        let _pages = [];
        for (let i = 0; i < num; i++) {
            let key = i + 1;
            _pages.push(
                <h1
                    key={"page" + key}
                    onClick={() => handleClickPage(key)}
                    onKeyDown={(e) => handleKeyDown(e)}
                >
                    {key + "y_2"}
                </h1>
            );
        }
        setPages((p) => _pages);
    };

    useEffect(() => {
        displayPages(pageLength);

        return () => {};
    }, []);

    if (pageLength === 0 || pages.length === 0) return null;
    return (
        <div>
            {pages}
            <h3>current active page is : {curPage}</h3>
        </div>
    );
};

export default Nav;
