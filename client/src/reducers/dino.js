import {DINO_FETCHED} from '../actions';

const reducer = (state = {}, action = {}) => {
   switch(action.type){
       case DINO_FETCHED:
           return action.data
        default:
            return state
   }
}


export default reducer