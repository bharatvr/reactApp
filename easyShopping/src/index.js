import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import appReducer from './reducers/appReducer'
import Root from './components/Root'
import thunkMiddleware from 'redux-thunk'
import {logger} from './middleware/middleware'
import style from './styles/styles.css'

let state = createStore(appReducer, applyMiddleware(thunkMiddleware,logger))

render(
    <Root store={state}>
    </Root>,
    document.getElementById('root')
)