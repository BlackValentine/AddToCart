import React from 'react';
import { connect } from 'react-redux';
import Message from './../Components/Message'
import { actUpdateMessage } from './../actions/index'

function MessageContainer(props) {
    var { message } = props;
    return (
        <Message message={message} />
    );
}


const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);
