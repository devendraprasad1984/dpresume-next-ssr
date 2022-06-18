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
            commonStyles.colGrid,
        ].join(' ')}>
            <span>{name}</span>
            <span>{headline}</span>
            <span>{title}</span>
            <span>{email}, {phone}</span>
        </div>
        <div>{children}</div>
    </div>;
};

export default PageHeader;
