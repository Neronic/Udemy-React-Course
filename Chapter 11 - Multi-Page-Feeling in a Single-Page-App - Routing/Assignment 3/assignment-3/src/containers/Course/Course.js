import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: "",
  };

  componentDidMount() {
    this.paramsPass();
  }

  componentDidUpdate() {
    this.paramsPass();
  }

  paramsPass() {
    //console.log(this.props);
    const q = new URLSearchParams(this.props.location.search);
    for (let p of q.entries()) {
      if (this.state.courseTitle !== p[1]) {
        this.setState({ courseTitle: p[1] });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
