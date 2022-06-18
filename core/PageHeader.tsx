import React, {ReactNode} from "react";

import commonStyles from "../styles/common.module.scss";

interface Props {
    children?: ReactNode;
}

const PageHeader = ({children}: Props) => {
    return <div className={[
        commonStyles.marginUD
    ].join(' ')}>
        <div className={[
            commonStyles.pageHeader,
            commonStyles.colGrid,
        ].join(' ')}>
            <span>Devendra Prasad</span>
            <span>Technophile . Inquisitive . Motivated . Self-Learner</span>
            <span>Tech Lead UI Developer</span>
            <span>devendraprasad1984@gmail.com, +91 9582797772</span>
        </div>
        <div>{children}</div>
    </div>;
};

export default PageHeader;
