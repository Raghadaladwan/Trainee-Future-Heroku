import React, { Component } from "react";

export class Search extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col">
            <label class="form-check-label">
              {" "}
              <h4 style={{ fontWeight: "bold" }}>Select Field</h4>
            </label>
            <select
              className=" form-control sm-control"
              name=" field"
              onChange={this.props.filterdata}
            >
              <option value="DEFAULT" disabled hidden selected>
                Select Field
              </option>
              <option value="Engineering">Engineering</option>
              <option value="IT">IT</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
          <div style={{ marginTop: "39px" }} className="col">
            <form style={{ display: "flex", border: "none" }}>
              <div style={{ width: "90%" }}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for a job "
                  aria-label="Search"
                />
              </div>
              <div className="left">
                <button
                  className="btn btn-success my-2 my-sm-0"
                  style={{
                    marginLeft: "7px",
                    backgroundColor: "#622556",
                    fontWeight: "bolder",
                    color: "white"
                  }}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
