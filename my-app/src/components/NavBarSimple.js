import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends Component {
  constructor(props) {
    super(props);

    // Step 3: Setting initial state
    this.state = {
      message: "Welcome to My Gallery!",
      loggedIn: false,
    };

    // Binding the handleClick method
    this.handleClick = this.handleClick.bind(this);
  }

  // Step 5: handleClick method to update state
  handleClick() {
    this.setState(
      (prevState) => ({
        loggedIn: !prevState.loggedIn,
        message: prevState.loggedIn
          ? "Welcome to My Gallery!"
          : "Thanks for logging in!",
      }),
      () => {
        console.log(this.state.message); // Log the message to the console
      }
    );
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <span>{this.state.message}</span>
        <button onClick={this.handleClick}>
          {this.state.loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}

export default NavBarSimple;
