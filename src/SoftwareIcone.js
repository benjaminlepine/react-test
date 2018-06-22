import React, { Component } from 'react'
import Counter from "./Counter";
import PropTypes from "prop-types";


const divStyle = {
    backgroundColor: 'blue',
};

const divStyle2 = {
    backgroundColor: 'red',
};

class SoftwareIcone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blue: true,
            red: true,
        }
    }

    changeColor(){
        this.setState({blue : !this.state.blue});
        console.log("this.state = ",this.state);

    }

    render(props) {
        let class_color = this.state.blue ? divStyle : divStyle2;

        return (
            <div>
                <div id="iconeSoft" style={class_color}>
                    <img src='src/img/application.png' onClick={() => this.changeColor()}/>
                    <img src='src/img/cloud.png' onClick={() => this.changeClass("cloud")}/>
                    <img src='src/img/desktop.png' onClick={() => this.changeClass("desktop")}/>
                </div>
            </div>
        );
    }



}

SoftwareIcone.propTypes = {
    'increment': PropTypes.number.isRequired,
    'color': PropTypes.string.isRequired
}

export default HelloUser3
