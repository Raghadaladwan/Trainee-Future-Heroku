import React from "react";
import axios from "axios";
import Search from "./search";
import List from "./list";

class Student extends React.Component {
  state = {
    companies: []
  };

  // ___________________________ filter __________________________

  filterdata = (field, id) => {
    // console.log(field.target.value);
    let filt = this.state.companies.map(com => {
      // console.log(com);
      // this.state.companies.push(com.img_path);

      return com.post.filter(post => {
        return post.field === field.target.value;
      });
    });
    console.log("filt", filt);
    this.setState({ noor: filt });
  };

  // ____________________________________________________________________

  details = id => {
    this.setState({
      companies: [...this.state.companies.filter(company => company.id === id)]
    });
  };

  // ___________________________ Read__________________

  componentDidMount() {
    axios.get("/data").then(({ data }) => {
      // console.log(data)
      this.setState({
        companies: data
      });
    });
  }

  // ___________________________ ADD company__________________

  addCompany = (
    name,
    email,
    website,
    city,
    comp_description,
    field,
    img_path
  ) => {
    axios
      .post(`/add`, {
        name,
        email,
        website,
        city,
        comp_description,
        field,
        img_path: ""
      })
      .then(res => {
        this.setState({
          companies: res.data
        });
      })

      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  // __________________________________________________________

  render() {
    console.log("object",this.props.companies)
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "110px" }}>
          Student page
        </h1>
        <Search filterdata={this.filterdata} />
        <List
          companies={this.state.companies}
          noor={this.state.noor}
          filterdata={this.filterdata}
          loginTrainee={this.props.loginTrainee}
          isloged={this.props.isloged}
        />
      </div>
    );
  }
}

export default Student;
