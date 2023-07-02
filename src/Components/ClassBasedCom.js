import React, { Component } from 'react'



export default class ClassBasedCom extends Component {
    constructor(props){
        super(props);
        this.props=props;
        this.state = {
            name : "hrishi",
        }
    }

    handleOnClick = () =>{
        this.setState({name:"patil"})
    }
    
  render() {
    const temp = this.state
    return (
        <>
        <div>
        Name : {temp.name}
      </div>
      <button type='button' onClick={this.handleOnClick}>Click me</button>
        </>
      
    )
  }
}
