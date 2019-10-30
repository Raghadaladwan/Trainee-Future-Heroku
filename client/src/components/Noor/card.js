import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    console.log("AHmaaaaaaaaaaaaaaaaaa",this.props)
    const { post } = this.props;
    const { companies } = this.props;

    return (
      <div
      className="container"
        style={{
          marginTop: "30px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "15px",
          padding: "0"
        }}
      >
        <div className="card ">
          <h2
            className="card-header text-center"
            style={{
              margin: "0px",
              backgroundColor: "#5b2c5a",
              height: "50px",
              color: "white"
            }}
          >
            {companies.name}
            
          </h2>
          <div className="row ">
            <div className="col-md-4">
            
              {/* <img
                src={companies.img_path}
                // src={post.img_path}
                className="card-img img-thumbnail float-left"
                alt="company logo"
              /> */}

              <img src={post.img_path}
                className="card-img img-thumbnail float-left"
                alt="company logo"/>
              
              {/* <div>
  <img src="{post.img_path}"></img>

</div> */}




          



              {console.log('img-path',post.img_path)}
            </div>

            <div className="card-body">
            {/* <img src={post.img_path}
               className="card-img img-thumbnail float-left"
               alt="company logo"/> */}
               
              <h3 className="card-title">Training Description</h3>
              <p className="card-text">{post.job_description}</p>
              <hr />
              <h3 className="card-title">The Field</h3>
              <p className="card-text">{post.field}</p>

              <Link
                to={{ pathname: `/cardDetails`, companies: companies }}
                className="btn"
                style={{
                  position: "absolute",
                  width: "20%",
                  top: "260px",
                  right: "15px",
                  paddingTop: "15px",
                  backgroundColor: "#5b2c5a",
                  color: "white"
                }}
              >
                <i className={{ marginRight: "13px" }}>Info About Company</i>
                <span
                  class="glyphicon glyphicon-search form-control-feedback"
                  style={{ marginTop: "8px", marginRight: "9px" }}
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

