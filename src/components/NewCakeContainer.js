import React, {useState} from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            <button onClick={props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}
//state from our redux store is mapped to the component props
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
//map dispatch of an action creator to a prop in our componet
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
