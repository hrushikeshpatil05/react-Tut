import React from 'react'

export default function InputForm(props) {
  return (
    <>
        <div className="inputform">
          <form className="row g-3" onSubmit={props.submit}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" name="email"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                name="pass"
              />
            </div>
            <div className="col-12">
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
              <input type="text" className="form-control" id="inputCity" name="city"/>
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
              <input type="text" className="form-control" id="inputZip" name="zip"/>
            </div>
            
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </>
  )
}


