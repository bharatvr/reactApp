import Header from './header/Header'
import Footer from './footer/Footer'
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (

            <table className="_layout">
                <tr>
                    <td className="_header">
                        <Header/>
                    </td>
                </tr>
                <tr>
                    <td className="_mainContent">
                        {this.props.children}
                    </td>
                </tr>
                <tr>
                    <td className="_footer">
                        <hr className="_hrButtom"/>
                        <Footer/>
                    </td>
                </tr>
            </table>
        )
    }
}

export default Layout;