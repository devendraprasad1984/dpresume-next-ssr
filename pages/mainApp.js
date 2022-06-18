import commonStyles from '../styles/common.module.scss'
import PageHeader from "../core/PageHeader";
import PageFooter from "../core/PageFooter";

export default function MainApp({children}) {
    return (
        <div className={[
            commonStyles.pageContainer,
            commonStyles.pad40
        ].join(' ')}>
            <PageHeader/>
            <div className={[
                commonStyles.marginUD
            ].join(' ')}>
                {children}
            </div>
            <PageFooter/>
        </div>
    )
}
