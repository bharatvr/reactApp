/**
 * Created by bsingh on 08/06/2017.
 */
import React from 'react';
import Menu from '../menu/Menu'

class Header extends React.Component {
    render() {
        return (
            <table className="_tableHeader">
                <tr>
                    <td className="_headerLeft">
                        <table className="_tableHeader">
                            <tr>
                                <td className="_headerImage">
                                    <img src={require('../../../images/header.jpg')} height={100} role="presentation" />

                                </td>
                            </tr>
                        </table>
                    </td>

                    <td className="_headerRight">
                        <table className="_tableHeader">
                            <tr>
                                <td className="_menuTd">
                                    <Menu/>

                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <hr className="_hrTop"/>
                    </td>
                </tr>
            </table>
        )
    }
}

export default Header;