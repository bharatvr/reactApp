import { combineReducers } from 'redux'
import * as constants from './../constants/Constants'


function fetchPatients(state = {
  isFetching: false,
  didInvalidate: false,
  responseData: []
}, action) {
  switch (action.type) {
    case constants.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case constants.RECEIVE_POSTS:
    	//console.log("Data in Reducer.."+JSON.stringify(action.patients));
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        responseData: action.responseData,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function fetchPatientDetails(state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_POSTS:
    case constants.REQUEST_POSTS:
      return fetchPatients(state, action);
    default:
      return state
  }
}

const patientReducer = combineReducers({
  fetchPatientDetails
})

export default patientReducer