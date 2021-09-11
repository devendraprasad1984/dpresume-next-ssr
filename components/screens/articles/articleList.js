import commonStyles from '../../../styles/common.module.css'
import ArticleItem from "./articleItem";


const ArticleList = props => {
    const {list} = props
    const renderList = () => {
        if (list.length === 0) return
        return list.map((row, index) => <div key={'a-item-' + index}><ArticleItem item={row}/></div>)
    }
    return <div className={commonStyles.grid}>
        {renderList()}
    </div>
}
export default ArticleList
