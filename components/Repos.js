import React, { Component } from 'react';

class Repos extends Component {
    render() {
        return (
            <div className="container">
                <h1>{this.props.id}</h1>
                <h2>{this.props.name}</h2>
                <h3>{this.props.link}</h3>
                <h4>{this.props.des}</h4>
            </div>
        );
    }
}

export default Repos;