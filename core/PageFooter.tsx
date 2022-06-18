import React, {ReactNode} from "react";

import commonStyles from "../styles/common.module.scss";

interface Props {
    children?: ReactNode;
}

const PageFooter = () => {
    return <div className={[
        commonStyles.footer,
        commonStyles.marginUD
    ].join(' ')}>
        <div className={[
            commonStyles.colGrid,
        ].join(' ')}>
            <span>Footer</span>
            <div className={[
                commonStyles.rowGrid
            ].join(' ')}>
                <span>Links</span>
                <span>Links</span>
                <span>Links</span>
                <span>Links</span>
                <span>Links</span>
            </div>
        </div>
    </div>;
};

export default PageFooter;
