
import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'
import { actions } from 'react-redux-form';
export const addTrips = (trips) => ({
    type: ActionTypes.ADD_TRIP_CHARGE,
    payload: trips
});

export const tripsLoading = () => ({
    type: ActionTypes.TRIP_CHARGE_LOADING
});
export const tripsFailed = (errMess) => ({
    type: ActionTypes.TRIP_CHARGE_FALIED,
    payload: errMess
});

export const fetchTrips=()=>(dispatch)=>{
dispatch(tripsLoading(true))
   return fetch(baseUrl +'trips')
    .then(response=>{
        if (response.ok){
            return response;
        }
        else{
            const error =new Error('Error ' + response.status + ': ' + response.statusText);
            error.response=error;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess
    }
    )
    .then (response=>response.json())
    .then(response=>dispatch(addTrips(response)))
    .catch(error=>dispatch(tripsFailed(error.message)))
}

//******************Form */
export const postCard = (card) => (dispatch) => {

    const newCard ={...card}
      
    return fetch(baseUrl + 'tcard', {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            //if server not response no hear any thing from server
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then(card => dispatch(actions.push(card)))
        .catch(error => {
            console.log('Isusse card', error.message);
            alert('Your card could not be issued\nError: ' + error.message);
        });

}