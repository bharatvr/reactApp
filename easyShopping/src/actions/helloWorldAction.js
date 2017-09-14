/**
 * Created by bsingh on 12/13/2016.
 */
import * as constants from './../constants/Constants'

export const addHelloWorld = () => ({
        type: constants.HELLO_WORLD
})

export const addHelloReact = () => ({
    type: constants.HELLO_REACT
})

let nextNameId = 0
export const addName = (text) => ({
    type: constants.ADD_NAME,
    id: nextNameId++,
    name: text,
    text
})

export const submitSimpleForm = (values) => ({
	type: constants.SUBMIT_FORM,
   values
})
