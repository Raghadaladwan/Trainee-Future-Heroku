import React, { Component } from "react";
import axios from "axios";
import AddPost from "./addPost";
import Posts from "./Posts";

export default class Dashboard extends Component {
  state = {

  };

  componentDidMount() {
    console.log("this.props.company from dashbord", this.props.company.post);
  }

  addPost = (job_description, field) => {
    let company_info = { ...this.props.company };

    let img_path = company_info.img_path
    company_info.post.push({ job_description, field, img_path  });

    // company_info.post[0].img_path=company_info.img_path;
    console.log(company_info)
    axios
      .put("/addPost", company_info)
      .then(({ data }) => {
        console.log('DATAAAAAAA: ', data)
        this.setState({ companies: data });
      });
  };

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "90px" }}>
          {" "}
          {this.props.company.name}{" "}
        </h1>

        <AddPost addPost={this.addPost} />
        <Posts
       
          company={this.props.company}
          deleteItem={this.props.deleteItem}
        />
      </div>
    );
  }
}
