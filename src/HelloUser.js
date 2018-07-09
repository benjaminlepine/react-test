// How use in App.js : <HelloUser user='Benjamin'/>
import React, { Component } from 'react'

class HelloUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;
        return <div>Hello {user}</div>
    };
}

export default HelloUser