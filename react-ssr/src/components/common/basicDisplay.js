import HTML from "./htmlComponent";


const BasicDisplay = ({list, tag, className}) => {
    const display = () => {
        if (list === undefined) return null
        if (list.length === 0) return null
        return list.map((row, index) => {
            return <div key={'key-' + index}><HTML text={row}/></div>
        })
    }
    return <div className={className}>
        <div className='bl'>{tag||''}</div>
        {display()}
    </div>
}

export default BasicDisplay
