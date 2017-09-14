/**
 * Created by bsingh on 12/13/2016.
 */
import React, { PropTypes } from 'react';
import HelloUser from './User'
const Hello = ({ onClickHelloWorld,onClickHelloReact,onClickHelloUser,message }) => {

    return (
        <div>
        <div className="_topDiv">
	        <div className="_helloDiv">
	            <h2>{ message }</h2>
	            <p>
	            <button onClick={onClickHelloWorld}>
	                Hello World
	            </button>
	            </p>
	            <p>
	            <button onClick={onClickHelloReact}>
	                Hello React
	            </button>
	            </p>
	            <HelloUser/>
	            </div>
	        </div>
        </div>
    )
}

Hello.propTypes = {
        message: PropTypes.string.isRequired
}

export default Hello