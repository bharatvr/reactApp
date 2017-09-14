import { combineReducers } from 'redux'
import helloWorld from './helloWorld'

import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
    helloWorld,
    form: formReducer
    
})

export default appReducer
