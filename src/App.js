import React, { Component } from "react";
import "./App.css";
import RecipeReviewCard from "./components/cards";
import ButtonBase from "./components/buttons";
import Menus from "./components/menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleScrollToElement = () => {
    window.scrollTo({
      top: this.myRef.current.offsetTop,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="sections section1">
          <div className="Header">
            <img
              src={require("./assets/images/logo-6.png")}
              width="100"
              height="120"
            />
            <Menus right />
          </div>
          <div className="buttons">
            <ButtonBase />
          </div>
        </div>
        <div className="sections section2" ref={this.myRef}>
          <p>Section 2</p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
