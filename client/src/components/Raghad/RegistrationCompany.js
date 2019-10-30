import React, { Component } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../Firebase/";
export default class RegisterCompany extends Component {
  state = {
    image: "",
    img_path: "",
    progress: 0
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getImagePath = event => {
    const image = event.target.files[0];
    this.setState({ image });
  };
  fileUpload = () => {
    const { image } = this.state;
    const uploadImg = storage.ref(`images/${image.name}`).put(image);
    uploadImg.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(img_path => {
            this.setState({ img_path });
          });
      }
    );
  };

  addCompany = () => {
    this.props.addCompany(this.state);
   
  };

  render() {
    const { change, addCompany } = this;
    return (
      <div>
        <div>
          <div>
            {" "}
            <h3 style={{ textAlign: "center" }}>Register as a Company</h3>
          </div>
          <label class="form-check-label">
            <h5 style={{ fontWeight: "bold" }}>Company Name</h5>
          </label>
          <input
            placeholder="Enter Your Company Name"
            name="name"
            type="text"
            className="validate form-control"
            onChange={change}
          />
         

          <label class="form-check-label">
            <h5 style={{ fontWeight: "bold" }}>E-Mail</h5>
          </label>
          <input
            placeholder="Example@email.com"
            name="email"
            type="text"
            className="validate form-control"
            onChange={change}
          />
          <label class="form-check-label">
            <h5 style={{ fontWeight: "bold" }}>Password</h5>
          </label>
          <input
            placeholder="Enter Password"
            name="password"
            type="password"
            className="validate form-control"
            onChange={change}
          />
          <label class="form-check-label">
            <h5 style={{ fontWeight: "bold" }}>Company Website</h5>
          </label>
          <input
            placeholder="https://example.com"
            name="website"
            type="text"
            className="validate form-control"
            onChange={change}
          />
          <label class="form-check-label">
            <h5 style={{ fontWeight: "bold" }}>Location</h5>
          </label>
          <select
            className=" form-control sm-control"
            name="location"
            onChange={change}
          >
            <option value="DEFAULT" disabled hidden selected>
              Location
            </option>
            <option value="Amman">Amman</option>
            <option value="alsalt">Alsalt</option>
            <option value="Irbid">Irbid</option>
          </select>

          <label class="form-check-label">
            <h5 style={{ fontWeight: "bold" }}>Discription</h5>
          </label>
          <textarea
            placeholder="About the company"
            name="comp_description"
            type="textarea"
            className="validate form-control"
            onChange={change}
          />
           <div style={{ marginTop: "15px" }} >
          <input
            type="file"
            name="img_path"
            className="validate form-control"
            onChange={this.getImagePath}
          />
          <button
            className="btn btn-danger ml-5 mt-2 w-25"
            onClick={this.fileUpload}
            name="img_path"
            style={{
              backgroundColor: "#622556",
              color: "white",
              fontWeight: "bolder",
              marginLeft: "35%",
              marginTop: "25px",
              marginBottom: "25px",
              paddingTop: "10px"
            }}
          >
            upload
          </button>
          <progress value={this.state.progress} max="100"
          style={{ marginLeft: "15px", marginBottom: "8px" }} />
          <br />
          {/* <img src={this.state.img_path} alt="a" /> */}
        </div>

          <Link
            to="/login"
            className="btn"
            style={{
              backgroundColor: "#622556",
              color: "white",
              fontWeight: "bolder",
              marginLeft: "35%",
              marginTop: "25px",
              marginBottom: "25px",
              paddingTop: "14px"
            }}
            onClick={addCompany.bind(this)}
          >
            Regist as Company
          </Link>

        </div>
       
      </div>
    );
  }
}
