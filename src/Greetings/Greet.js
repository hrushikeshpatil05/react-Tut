import React from "react";

export default function Greet(props) {
  return (
    <>
      <div className="greets">
        <h2>Validate your input field</h2>
        <h3>email : {props.email}</h3>
        <h3>address: {props.address}</h3>
        <h3>city :{props.city}</h3>
        <h3>state :{props.state}</h3>
        <h3>zip: {props.zip}</h3>
      </div>
    </>
  );
}
