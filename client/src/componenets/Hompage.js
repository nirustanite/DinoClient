import React from 'react';
import Button from '@material-ui/core/Button';

export default function Homepage(props){
    return(
        <React.Fragment>
            <h2>Find Your Pet Dino</h2>
            <div className="App-header">
                <h3 className="heading">Instructions for the game</h3>
                <ul>
                    <li>The motive of the game is to find a pet dinosaur for you.</li>
                    <li>There are some questions to answer</li>
                    <li>After you answered all the questions, Based on your character you will recieve a pet dino</li>
                </ul>
                <Button variant="contained" color="primary" onClick={props.onSubmit}>
                    Start Game
                </Button>
            </div>
        </React.Fragment>
    )
}