import React from 'react'
import Homepage from './Hompage'

export default class HomePageContainer extends React.Component{
    onSubmit = (e) => {
        e.preventDefault()
        this.props.history.push("/game")
    }

    render(){
        return(
            <Homepage onSubmit={this.onSubmit} />
        )
    }
}