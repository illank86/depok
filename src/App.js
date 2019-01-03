import React, { Component } from "react";
import "./App.css";
import RecipeReviewCard from "./components/cards";
import ButtonBase from "./components/buttons";
import Popup from "reactjs-popup";
import BurgerIcon from "./components/BurgerIcon";
import Menu from "./components/menu";
import SimpleSlider from "./components/Carousel";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

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
            <div className="logo" />

            <Popup
              modal
              overlayStyle={{ background: "rgba(255,255,255,0.8" }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={open => <BurgerIcon open={open} />}
            >
              {close => <Menu close={close} />}
            </Popup>
          </div>
          <div className="buttons">
            <SimpleSlider />
            <ButtonBase />
          </div>
        </div>
        <div className="sections section2" ref={this.myRef}>
          <div>
            <h1 style={{ textAlign: "center", color: "grey" }}>
              Berita Depok Terkini
            </h1>
            <p style={{ textAlign: "center", color: "#rgba(255, 255, 255)" }}>
              Dapatkan berita terbaru mengenai depok
            </p>
          </div>
          <div className="berita">
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
