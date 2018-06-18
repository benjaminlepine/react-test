import React, { Component } from 'react'

class HelloUser2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            happy : false
        };
    }

    changerHumeur() {
        this.setState({
            happy: !this.state.happy
        });
    }

    render() {
        console.log("this.state = ", this.state)
        const user = this.props.user;
        return (
            <div>
                <p>Hello {user}, I guess you are { !this.state.happy || 'happy' } today! </p>
                <span>
                    <input type='button' value='Click me !' onClick={this.changerHumeur.bind(this)}/>
                </span>
            </div>
                );
    }
}

export default HelloUser2
