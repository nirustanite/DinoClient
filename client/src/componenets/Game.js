import React from 'react'
import { Button } from '@material-ui/core';

export default function Game(props){
   {props.questions && console.log("Questions",props.questions[0])}


   console.log('Q', props.questions)
    return(
        <React.Fragment>
          {props.questions ?
          <React.Fragment>
          <main>
          <p>{props.questions.question}</p>
          <div class="button-container">
          {props.questions.choices.map(choice => {
              return <button className="btn-choice" value={choice} onClick={props.handleChange}>{choice}</button>
          })}</div></main></React.Fragment>
          :
          <div className="getDino">
               <p>Hola !!! You finished Answering</p>
               <p>Now it's time to get You Pet Dinosaur</p>
               <p>Press Button to get your Dino</p>
               <div className="App-header">
               <Button variant="contained" color="primary" onClick={props.onSubmit} >Get My Pet</Button>
               </div>
          </div>
         
        }
        </React.Fragment>
    )
}