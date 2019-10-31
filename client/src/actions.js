import request from 'superagent'
const url = "http://localhost:4000"


const QuestionsFetched = (data) => {
    return{
        type:QUESTIONS_FETCHED,
        data
    }
}

const DinoFetched = (data) => {
    return{
        type:DINO_FETCHED,
        data
    }
}

export const loadQuestions = () => (dispatch) => {
    request
          .get(`${url}/question`)
          .then(response => {
              console.log(response.body)
              dispatch(QuestionsFetched(response.body))
          })
}

export const getDino = (answers) => (dispatch) => {
    request
         .post(`${url}/dinosaurname`)
         .send({answer:answers})
         .then(response => {
             console.log(response.body)
             dispatch(DinoFetched(response.body))
         })
}



export const QUESTIONS_FETCHED = 'QUESTIONS_FETCHED';
export const DINO_FETCHED='DINO_FETCHED';
