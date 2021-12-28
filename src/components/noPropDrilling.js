import React, {useState} from 'react'

const NoPropDrilling = () => {
    const [number, setNumber] = useState(0)
    const addNumber = () => {
        setNumber(v => v + 1)
    }
    return <div style={{marginTop: '40px'}}>
        <button onClick={addNumber}>Add</button>
        <MainContainer>
            <Main>
                <Post number={number}/>
                <Post1 number={number}>
                    {(props)=>{
                        return <h2 style={{color:'red'}}>{props.number}</h2>
                    }
                    }
                </Post1>
            </Main>
        </MainContainer>
    </div>
}
const MainContainer = ({children}) => {
    console.log('main container children', children.props)
    return <div>
        <p>main container</p>
        {children}
        <p>another main stuff</p>
    </div>
}

const Main = ({children}) => {
    console.log('main children', children.props)
    return <div>
        <p>main component stuff</p>
        {children}
    </div>
}

const Post = ({number}) => {
    return <div>
        <h1>POST: {number}</h1>
    </div>
}

const Post1 = (props) => {
    return <div>
        <p>in post1: {props.children({...props})}</p>
        <h1>POST_1: {props.number}</h1>
    </div>
}

export default NoPropDrilling