
import * as ActionTypes from './ActionTypes'
export const Trips = (state = {
    isLoading: true,
    errMess: null,
    trips: []
}, action) => {
    switch (action.type) {
        case ActionTypes.TRIP_CHARGE_LOADING:
            return { ...state, isLoading: true, errMess: null, trips: [] }
        case ActionTypes.TRIP_CHARGE_FALIED:
            return { ...state, isLoading: false, errMess: action.payload, trips: [] }
        case ActionTypes.ADD_TRIP_CHARGE:
            return { ...state, isLoading: false, errMess: null, trips: action.payload }
default:
    return state;
  
        }
}