
import React, { useEffect, useState } from "react";

const useFetchDependency1 = () => {
    const [data, setData] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(true);
        setTimeout(() => {
            setData( "new");
            setLoading( false);
        }, 500);
    }, []);

    return [data, isLoading];
};

const query = new URLSearchParams(window.location.search);
const p1 = query && query.get("p1");
// const p2 = query && query.get("p2");
export default function BhavyaRerenderTest() {
    console.log('search param',window.location.hash)
    const [_p2, setP2] = useState(window.location.hash)
    const [dependency1, dependency1Loading] = useFetchDependency1();
    if(dependency1Loading) return null
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen! {window.location.hash}</h2>
            <Parent
                searchParam1={p1}
                searchParam2={_p2}
                dependency1={dependency1}
                dependency1Loading={dependency1Loading}
            />
        </div>
    );
}

const Parent = ({
                    searchParam1,
                    searchParam2,
                    dependency1,
                    dependency1Loading
                }) => {
    const [_searchParam2, setSearchParam2] = useState(dependency1Loading ? dependency1 : searchParam2 + dependency1);

    // useEffect(() => {
    //     if (!dependency1Loading) {
    //         setSearchParam2((p) => searchParam2 + dependency1);
    //     } else {
    //         setSearchParam2((p) => searchParam2);
    //     }
    // }, [dependency1, dependency1Loading]);

    if (dependency1Loading) return "Loading";
    return <Child searchParam1={searchParam1} searchParam2={_searchParam2} />;
};

const Child = ({ searchParam1, searchParam2 }) => {
    useEffect(() => {
        console.log("backend call with ", searchParam1, searchParam2);
    }, [searchParam1, searchParam2]);

    return (
        <div>
            <p>
                {searchParam1} + {searchParam2}
            </p>
        </div>
    );
};
