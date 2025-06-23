import React, { Component } from 'react';

export default class User extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => {
                console.log(res);
                this.setState({
                    users: res
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.users.map(item => (
                        <div className='root' key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        );
    }
}