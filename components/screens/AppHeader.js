import headerStyles from '../../styles/header.module.css'

const AppHeader=props=>{
    return <>
        <div>
            <h1 className={headerStyles.title}>
                <span>App header</span> dpresume
            </h1>
        </div>
    </>
}
export default AppHeader
