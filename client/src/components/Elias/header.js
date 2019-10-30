import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {};

  render() {
    const { LogoutUser, isloged } = this.props;

    return isloged ? (
      <div
        class="fixed-top"
        style={{
          width: "",
          marginLeft: "",
          backgroundImage: "linear-gradient(to right top, #950055, #8f176a, #84297e, #73388f, #5b459e, #424c9d, #265199, #005492, #00517b, #004a61, #0b4249, #223837)",
  
          height: "80px"
        }}

        // backgroundImage: "linear-gradient(to right top, #950055, #8f176a, #84297e, #73388f, #5b459e, #424c9d, #265199, #005492, #00517b, #004a61, #0b4249, #223837)",
                // backgroundImage:
          //   "linear-gradient(to bottom, #760043, #70124b, #691d51, #622556, #5b2c5a, #482f5b, #363158, #263152, #0c2c42, #05242f, #0a1b1d, #0b1110)",

      >
        <div style={{ marginTop: "16px" }}>
          <ul class="nav nav-pills nav-fill ">
            <li class="nav-logo" 
            style={{ marginLeft: "40px", marginTop: "-5px" }} >
              <Link
                to="/"
              >
                <span className="glyphicon glyphicon-fire"> </span>
                Trainee Future
              </Link>
            </li>
            <li class="nav-item">
            </li>

            <Link 
            className="noor nav-link"
            to="/" 
            onClick={LogoutUser} 
            style={{  height: "100%",
            backgroundColor: "white !important",
            color: "white !important",
            fontWeight: "bolder !important" }}>
              LOGOUT
            </Link>
            
          </ul>
        </div>
      </div>
    ) : (
      <div
        class="fixed-top"
        style={{
          backgroundImage: "linear-gradient(to right top, #950055, #8f176a, #84297e, #73388f, #5b459e, #424c9d, #265199, #005492, #00517b, #004a61, #0b4249, #223837)",

          height: "80px"
        }}
      >
        <div style={{ marginTop: "16px" }}>
          <ul class="nav nav-pills nav-fill ">
            <li class="nav-logo"
            style={{ marginLeft: "40px", marginTop: "-5px" }} 
            >
              <Link
                to="/"
                style={{
              
                  fontSize: "30px",
                  fontWeight: "bolder"
                }}
              >
                <span className="glyphicon glyphicon-fire"> </span>
                Trainee Future
              </Link>
            </li>
            <li class="nav-item">
            </li>
            <li class="nav-item"></li>
            <li class="nav-item dropdown">
              <Link
                class=" dropdown-toggle"
                data-toggle="dropdown"
                href="/#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ height: "100%" }}
              >
                Login
              </Link>
              <div class="dropdown-menu" 
              style={{ width: "100%", padding: "25px" }} >
                <Link
                  class="dropdown-item"
                  to="/login"
                  style={{ height: "100%" , marginBottom: "20px" }}
                >
                 As a Company
                </Link>
                <Link
                  class="dropdown-item"
                  to="/logintrainee"
                  style={{ height: "100% !important" }}
                >
                 As a Trainee
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register" style={{ height: "100%" }}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

