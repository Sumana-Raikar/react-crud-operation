import React, { Component } from 'react';
import {connect} from 'react-redux'

class Form extends Component {
    
    constructor(){
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div> hello</div>
        );
    }
}

const mapStatetoProps = state => {
    return {};
}

const mapDispatchToprops = dispatch => {
    return {
        fetchData : () => dispatch(actions.fetchdata())
    };
}

export default connect(mapStatetoProps,mapDispatchToprops);