import {QUESTIONS_FETCHED} from '../actions';

const reducer = (state = null, action = {}) => {
   switch(action.type){
       case QUESTIONS_FETCHED:
           return action.data
        default:
            return state
   }
}


export default reducer