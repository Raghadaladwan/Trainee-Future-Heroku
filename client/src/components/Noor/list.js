import React, { Component } from "react";
import Card from "./card";

export default class List extends Component {
  render() {
    const { companies } = this.props;
    const noor = this.props.noor;
    console.log('raaaaaaaaaaaaag',this.props.companies);
    if (noor) {
      return noor.map((one, companies) => {
          return one.map((two, i) => (
            <Card key={i}  post={two} companies={companies}
             />

            ));
      });
    } else {
      return companies.map(companies => {
        return companies.post.map((item, i) => (
          <Card key={i} post={item}  companies={companies} />
        ));
      });
    }
  }
}

