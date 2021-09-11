import commonStyles from '../../styles/common.module.css'


const DisplayList = props => {
    const {list, fields, type} = props
    const renderList = () => {
        if (list.length === 0) return
        return list.map((row, index) => {
            let res = fields.split(',').map((fld, fi) => <span key={'fld' + fi}>{row[fld]}</span>)
            return <div className={commonStyles.card}>{res}</div>
        })
    }
    return <div className={commonStyles.grid}>
        {renderList()}
    </div>
}
export default DisplayList
