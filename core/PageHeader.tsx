import React, {ReactNode} from "react";

import commonStyles from "../styles/common.module.scss";

interface Props {
    children?: ReactNode;
}

const PageHeader = ({children}: Props) => {
    return <div className={commonStyles.pageContainer}>
        <div className={commonStyles.pageHeader}>Header Section</div>
        <div>{children}</div>
    </div>;
};

export default PageHeader;
