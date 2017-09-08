/**
 * Created by bsingh on 12/13/2016.
 */
import * as constants from './../constants/Constants'

const helloWorldReducer = (state = { message: 'Hello',formData: null }, action) => {
    switch (action.type) {
        case constants.HELLO_WORLD:
            //console.log('Reducer: helloWorld')
            return  { message: 'Hello, World!' }
        case constants.HELLO_REACT:
            //console.log('Reducer: hello React ')
              return  { message: 'Hello, React!' }
        case constants.ADD_NAME:
            //console.log('Reducer: hello user ')
            return  { message: 'Hello, '+action.text +'!' }
        case constants.SUBMIT_FORM:
            //console.log('Reducer: Submit Form '+action.values)
            return  { formData: action.values}
        case constants.CONTACT_PAGE:
            //console.log('Reducer: Contact Page Form '+action.contactDetails)
            return  { message: 'Hello, '+JSON.stringify(action.contactDetails) }
        default:
            return state
    }
}

export default helloWorldReducer