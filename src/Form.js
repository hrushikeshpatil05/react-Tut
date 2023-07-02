import React, { Component } from "react";
import './App.css';

export default class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : null,
           number : null
        }
      }
      submitHandler = (event) => {
        event.preventDefault();
        const name = event.target.Name.value;
        const number = event.target.number.value;
        this.setState({
            name,number
        },()=>{
            console.log(this.state);
        })
    };

    keyHandler = (event) => {
        console.log(event.target.value);
    }
  render() {
    
    
    
    return (
      <div className="Form">
        <form onSubmit={this.submitHandler}> 
            <div className="inp" onKeyUp={this.keyHandler}>
            <input type="text" name="Name" placeholder="Name" />
            </div>
          <div>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example" name="number"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
          <button type="submit">submit</button>
          
        </form>
      </div>
    );
  }
}
