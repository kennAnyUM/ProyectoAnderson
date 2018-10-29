import React, { Component } from 'react';
import axios from 'axios';

class Background extends Component {
    constructor() {
        super();
        this.state = {
            persons: []
        };
    }

    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        );
    }
}
export default Background;