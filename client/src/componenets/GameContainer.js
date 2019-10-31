import React from 'react'
import {connect} from 'react-redux'
import {loadQuestions,getDino} from '../actions'
import Game from './Game'

class GameContainer extends React.Component{
  
    constructor(props){
        super(props)
        this.answer=[]
        this.state = { q: 0}
    }

    componentDidMount(){
        this.props.loadQuestions();
    }

    handleChange = (e) => {
        console.log("inside handlechange",e.currentTarget.value)
        //e.preventDefault()
        this.answer.push(e.currentTarget.value);
        this.props.getDino(this.answer)

        if (this.state.q < 4) {
        this.setState({ q: this.state.q + 1})
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/getdino")
    }

    render(){
        console.log('QL', this.props.questionlist)

        if (!this.props.questionlist) {
            return <p>Loading...</p>
        } else {
        return(
            <React.Fragment>
                <Game questions={this.props.questionlist[this.state.q]} 
                   handleChange={this.handleChange}
                   onSubmit={this.onSubmit}
                />
                {/* {this.props.questionlist && this.props.questionlist.map(question => {
                return  <Game questions={question} />
                })} */}
            </React.Fragment>
        )
            }
    }
}

const mapStateToProps = (state) => {
    return{
        questionlist:state.question
    }
}

export default connect(mapStateToProps,{loadQuestions,getDino})(GameContainer)
