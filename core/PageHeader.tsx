import React, {ReactNode} from "react";
import config from '../config'
import commonStyles from "../styles/common.module.scss";

interface Props {
    children?: ReactNode;
}

const PageHeader = ({children}: Props) => {
    const {name, title, headline, email, phone} = config.base

    return <div className={[
        commonStyles.marginUD
    ].join(' ')}>
        <div className={[
            commonStyles.pageHeader,
            commonStyles.rowGrid,
            commonStyles.gridContentAtCorners
        ].join(' ')}>
            <div className={commonStyles.colGrid}>
                <span className={commonStyles.size25}>{name}</span>
                <span className={commonStyles.size10}>{headline}</span>
            </div>
            <div className={[
                commonStyles.colGrid,
                commonStyles.right
            ].join(' ')}>
                <span className={commonStyles.size25}>{title}</span>
                <span className={commonStyles.size10}>{email}, {phone}</span>
            </div>
        </div>
        <div>{children}</div>
    </div>;
};

export default PageHeader;
