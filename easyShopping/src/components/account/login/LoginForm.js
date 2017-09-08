/**
 * Created by bsingh on 08/21/2017.
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {loginUser}  from './../../../middleware/LoginAction'



class LoginForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
                loginId: '',
                password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

   
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

        handleSubmit(event) { 
             loginUser(this.state.loginId,this.state.password);       
      
      }
    
    render() {
        const {handleSubmit} = this.props;
        return (

                <form onSubmit={this.handleSubmit}>
                <table className="_loginFormTable">
                    <tr>
                        <td><label>Login Id</label></td>


                        <td>
                            <Field name="loginId"  value={this.state.loginId} onChange={this.handleInputChange} component="input" type="text" placeholder="Login Id" maxlength="3"
                                size="20" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>


                        <td>
                            <Field name="password" component="input" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password"
                                maxlength="3" size="20" />
                        </td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <button type="submit" className="_myButton">
                                Sign&nbsp;in
                            </button>
                        </td>
                    </tr>
                    <tr>

                        <td colSpan={2}>
                            <br /> <a className="_aHref" href="#">Click Here</a><span className="_spanFormatter"> here for forget password</span>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <h4 className="divider">
                                <span>Are You New User?</span>
                            </h4>
                        </td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <button type="submit" className="_myButton">&nbsp;Create&nbsp;Your&nbsp;Account</button>
                        </td>
                    </tr>
                </table>

            </form>
        )
    }
}

LoginForm = reduxForm( {
    form: 'LoginForm'
} )( LoginForm )


export default LoginForm