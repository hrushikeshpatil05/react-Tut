
import React, { Component } from 'react'
import ClassBasedCom from "./Components/ClassBasedCom";
import "./App.css"
import FunctionBasedCom from "./Components/FunctionBasedCom";
import axios from 'axios';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      check : false,
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((item) => {
      this.setState({
        data : item,
        check : true,
      });
      // console.log(item);
    }) 
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  checkTime = () => {
    setTimeout(() => {
      this.setState({check:true});
    },10000)
  }
  toggleHandler(){
    this.setState({check:false})
    this.checkTime();
  }

  render() {
    const {check, data} = this.state;

    if(!check){
      return <h1>Wait...</h1>
    }
    let person;
      person = this.state.data.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))
    return (
      
      <>
      <div>
      <div>
        <button  id = "button"onClick={this.toggleHandler}>Toggole</button>
        {check === true ? person : ""}
      </div>
        {
          person
        }
      </div>
      
      </>
      
    )
  }
}


