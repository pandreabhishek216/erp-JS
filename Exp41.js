import React, { Component } from 'react'; 
export default class User extends Component { 
  state = { 
    users: [] 
  }; 
  componentDidMount() { 
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`) 
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
      <div className="container"> 
        <h2>Name: Abhishek Krashna Pandre</h2> 
        <h3>UEN: RTU24101IT014</h3> 
        <div className="row"> 
          {this.state.users.map(item => ( 
            <div className="album-card" key={item.id}> 
              {item.title} 
            </div> 
          ))}
        </div> 
      </div> 
    ); 
  } 
}