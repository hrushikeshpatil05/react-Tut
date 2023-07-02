import React, { Component } from "react";
import ClassBasedCom from "./Components/ClassBasedCom";
import "./App.css";
import FunctionBasedCom from "./Components/FunctionBasedCom";
import axios from "axios";
import Form from "./Form";
import InputForm from "./Greetings/InputForm";
import Greet from "./Greetings/Greet";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      check: false,
      switchBox: false
    };
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((item) => {
  //       this.setState({
  //         data: item,
  //         check: true,
  //       });
  //       // console.log(item);
  //     });
  //   this.toggleHandler = this.toggleHandler.bind(this);
  // }
  // checkTime = () => {
  //   setTimeout(() => {
  //     this.setState({ check: true });
  //   }, 10000);
  // };
  // toggleHandler() {
  //   this.setState({ check: false });
  //   this.checkTime();
  // }

  // removeHandler = (index) => {
  //   const copyData = this.state.data;
  //   copyData.splice(index, 1);
  //   this.setState({ data: copyData });
  // };
  
  submitHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const address = event.target.address.value;
    const city = event.target.city.value;
    const state = event.target.state.value;
    const zip = event.target.zip.value;
    this.setState(
      {
        email,
        pass,
        address,
        city,
        state,
        zip,
        check:true,
      }
    );
  };
  switchHandler = () => {
    this.setState({switchBox:!this.state.switchBox});
  }

  render() {
    // const { check, data } = this.state;

    // if(!check){
    //   return <h1>Wait...</h1>
    // }
    // let person;
    // person = this.state.data.map((item) => <h3 key={item.id}>{item.title}</h3>);
    return (
      <>
        {/* <div>
        <button  id = "button"onClick={this.toggleHandler}>Toggole</button>
        {check === true ? person : ""}
      </div> */}
        <div>
          {/* {person} */}
          {this.state.check ? 
            <Greet
              email={this.state.email}
              pass={this.state.pass}
              address={this.state.address}
              city={this.state.city}
              state={this.state.state}
              zip={this.state.zip}
            />
           : 
            <InputForm submit = {this.submitHandler} switchHandler={this.switchHandler} switchBox={this.state.switchBox}/>
          }
        </div>
      </>
    );
  }
}
