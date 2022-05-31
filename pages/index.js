import commonStyles from '../styles/common.module.scss'
import PageHeader from "../core/PageHeader";

export default function() {
    return (
        <div className={commonStyles.pageContainer}>
            <PageHeader />
            <footer>
                footer
            </footer>
        </div>
    )
}
