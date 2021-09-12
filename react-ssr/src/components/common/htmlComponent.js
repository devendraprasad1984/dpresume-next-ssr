const HTML = ({text}) => {
    return <div dangerouslySetInnerHTML={{__html: text}}/>
}
export default HTML
