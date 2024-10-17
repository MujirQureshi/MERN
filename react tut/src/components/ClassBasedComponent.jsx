import React from "react";

class ClassBasedComponent extends React.Component {
  state = { course: "react", counter: 0 };

  componentDidMount() {
    console.log("after render");
    // this.setState({ course: "vue", counter: this.state.counter + 1});
    this.setState((oldState) => {
      return {
        course: "vue",
        counter: oldState.counter + 1,
      };
    });
  }

  // call before close you component
  componentWillUnmount() {}

  render() {
    console.log("Before render");
    return (
      <div>
        <p>Class based component</p>

        <p>State: This is {this.state.course} course</p>
      </div>
    );
  }
}

export default ClassBasedComponent;
