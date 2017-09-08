import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


class App extends React.Component {
   render() {
      return (
    		  <div>
 			 <div className="_menuDiv">
 			  		<a className="_subMenu" href="/home">Home</a>
 		         	<a className="_subMenu" href="/about">About</a>
 			    	<a className="_subMenu" href="/contact">Contact</a> 			    	
 			</div>
			 {this.props.children}
 		</div>
      )
   }
}

export default App;