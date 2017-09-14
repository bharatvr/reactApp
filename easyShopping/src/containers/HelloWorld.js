/**
 * Created by bsingh on 12/13/2016.
 */
import { connect } from 'react-redux'
import Hello from './../components/Hello'
import * as actions from './../actions/helloWorldAction'


const mapStateToProps = (state, ownProps) => {
    return {
        message: state.helloWorld.message
    }
}

const mapDispatchToProps =  ({
    onClickHelloWorld: actions.addHelloWorld,
    onClickHelloReact: actions.addHelloReact
})

const HelloWorld = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)

export default HelloWorld