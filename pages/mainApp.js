import PageHeader from "../core/PageHeader";
import PageFooter from "../core/PageFooter";
import Nav from "../core/nav";
import commonStyles from '../styles/common.module.scss'

export default function MainApp({children}) {
    return (
        <div className={[
            commonStyles.textColor
        ].join(' ')}>
            <Nav/>
            <div className={commonStyles.rightPanel}>
                <PageHeader/>
                <div className={[
                    commonStyles.marginUD,
                    commonStyles.mainAppContainer
                ].join(' ')}>
                    {children}
                </div>
                <PageFooter/>
            </div>
        </div>
    )
}
