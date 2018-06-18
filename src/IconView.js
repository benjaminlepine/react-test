import React, { Component } from 'react'

class IconView extends React.Component {
    constructor(props) {
        super(props);
    }

    changerHumeur() {
        console.log("testtt");
    }


    render() {
        return (
            <div>
                <img src='src/img/application.png' onClick={this.changerHumeur}/>
            </div>
        );
    }
}

export default IconView
