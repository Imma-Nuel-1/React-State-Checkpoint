import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A software developer with a passion for React.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Developer",
      },
      show: false,
      timeInterval: 0,
    };

    // Bind the toggle method to `this`
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    // Set up the interval to update the timeInterval state
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the interval when the component is unmounted
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  render() {
    const { person, show, timeInterval } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <div>Time since component mounted: {timeInterval} seconds</div>
      </div>
    );
  }
}

export default App;
