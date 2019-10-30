import React, { Component } from "react";


export default class AddPost extends Component {
  state = {
    img_path: null,
    job_description: "",
    field: ""
  };

  change = event => {
    console.log("event.target.value :", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addPost = () => {
    this.props.addPost(this.state.job_description, this.state.field);
    this.setState({
      job_description: "",
      field: ""
    });
  };

  //----------------------------

  render() {
    const { change, addPost } = this;

    return (
      <div className="container" style={{ marginTop: "-40px" }}>
        <label class="form-check-label">
          <h3>Description</h3>
        </label>
        <textarea
          value={this.state.job_description}
          placeholder="About the Training"
          name="job_description"
          type="textarea"
          className="validate form-control"
          onChange={change}
        />
        <label class="form-check-label">
          <h3>Your Field</h3>
        </label>
        <select
          className=" form-control lg-control"
          name="field"
          onChange={change}
          value={this.state.field}
        >
          <option value="DEFAULT">Select the field</option>
          <option className="dropdown-item" value="Engineering">
            Engineering
          </option>
          <option className="dropdown-item" value="IT">
            IT
          </option>
          <option className="dropdown-item" value="Economy">
            Economy
          </option>
        </select>

        <button
          className="btn "
          onClick={addPost}
          style={{
            backgroundColor: "#622556",
            color: "white",
            fontWeight: "bolder",
            marginLeft: "44.4%",
            marginTop: "25px",
            marginBottom: "25px",
            paddingTop: "8px",
            width: "12%",
            height: "50px"
          }}
        >
          Add Post
        </button>
      </div>
    );
  }
}
