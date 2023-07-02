import React from "react";

export default function InputForm(props) {

    let btnText = "show Password";
    let pass = "password";
    const btnStyle = {
        backgroundColor : "green",
        color:"white"
    }
    
    if(props.switchBox === true){
        btnText="hide Password";
        pass = "text";
        btnStyle.backgroundColor = "red"
    }

  return (
    <>
      <div className="inputform">
        <form className="row g-2" onSubmit={props.submit}>
          <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type={pass}
              className="form-control "
              id="inputPassword4"
              name="pass"
            />
            </div>
            <div className="col-12" >
            <button type="button"  onClick={props.switchHandler} style={btnStyle}>{btnText}</button>
            </div>
          
          <div className="col-md-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select" name="state">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zip"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
