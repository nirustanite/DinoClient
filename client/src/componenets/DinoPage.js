import React from 'react'
import {connect} from 'react-redux'


class DinoPage extends React.Component{
    render(){
        return(
           <React.Fragment>
               <h2>Here's your pet</h2>
               <p>{this.props.dino.dinoname}</p>
               <img className="img" src={require(`../imagesdino/${this.props.dino.dinoid}.jpg`) }></img>
           </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dino:state.dino
    }
}

export default connect(mapStateToProps)(DinoPage)