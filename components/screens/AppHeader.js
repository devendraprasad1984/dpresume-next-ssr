import headerStyles from '../../styles/header.module.css'

const AppHeader=props=>{
    return <>
        <div>
            <h1 className={headerStyles.title}>
                <span>App header</span> dpresume
            </h1>
            <p className={headerStyles.description}>Perfect dpresume.com simple website</p>
        </div>
    </>
}
export default AppHeader
