import { browserHistory } from 'react-router';

/**
 * Logs an user in
 * @param  {string} username The username of the user to be logged in
 * @param  {string} password The password of the user to be logged in
 */
export function loginUser( username, password ) {
    alert( "alert user name " + username );



    fetch( 'http://localhost:8090/SurveyRestAPI/question/2' )
        .then( result => result.json() ) // still returns a promise object, U need to chain it again
        .then( items => this.setState( { items } ) );
         event.preventDefault();
}
