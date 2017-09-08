import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

const helloWorldApp = combineReducers({
     form: formReducer
    
})

export default helloWorldApp
