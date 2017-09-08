import fetch from 'isomorphic-fetch'

export function loginUser(usersId,password) {
	
	alert('login name '+usersId);
	 return function (dispatch) {
		 alert('inside dispatch function');
		 
		 dispatch(requestPosts())
		
		 var url='http://localhost:8090/SurveyRestAPI/question/2';
		
		 return fetch(url)
		 			.then(response => response.json())
		 				 .then(json => dispatch(receivePosts(usersId, json)))
	  }
}