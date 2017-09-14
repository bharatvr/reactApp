import React from 'react'
import { connect } from 'react-redux'
import {addName} from './../actions/helloWorldAction'

const User = ({ dispatch }) => {
    let text
    let inputFirstName
    let inputLastName

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                text=inputFirstName.value+" "+inputLastName.value
               
                if (!text.trim()) {
                    text='Please Enter Name'
                }
                dispatch(addName(text))
              
            }}>
                <p>
                First Name: <input ref={node => {
                    inputFirstName = node
                }} />
                </p>
                <p>
                Last Name: <input ref={node => {
                    inputLastName = node
                }} />
                </p>
                <p>
                <button type="submit">
                    Hello User
                </button>
                </p>
            </form>
        </div>
    )
}
const HelloUser = connect()(User)

export default HelloUser