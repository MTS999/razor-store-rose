import React from "react";
import { useState, useEffect } from "react";
import "./Hero.css";
import data from "../../data.jsx";
import Button from "../Button1.jsx";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
const Hero = () => {
  const [select_product, set_select_product] = useState(data[0]);
  const [showShare, setShowShare] = useState(false);

  // console.log(select_product);
  useEffect(() => {
    const interval = setInterval(() => {
      set_select_product((previous_product) => {
        const currentIndex = data.indexOf(previous_product);
        const nextIndex = (currentIndex + 1) % data.length;

        return data[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="Hero">
        <div className="hero-main-container">
          <div className="container hero-container-1">
            <div className="left-hero">
              <h1>{select_product.name}</h1>
              <div className="description">

              <p>{select_product.description}</p>
              </div>
              <Button text={"VIEW MORE"} />
            </div>

            <div className="right-hero">
              <div className="img">
                <img src={select_product.img} alt="" />
              </div>
            </div>
          </div>
          <div className="container hero-container-2">
            <div className="dots">
              <i
                className={`nf nf-oct-dot_fill ${
                  select_product.id == 0 ? "green" : ""
                }`}
                onClick={() => set_select_product(data[0])}
              ></i>
              <i
                className={`nf nf-oct-dot_fill ${
                  select_product.id == 1 ? "green" : ""
                }`}
                onClick={() => set_select_product(data[1])}
              ></i>
              <i
                className={`nf nf-oct-dot_fill ${
                  select_product.id == 2 ? "green" : ""
                }`}
                onClick={() => set_select_product(data[2])}
              ></i>
              <i
                className={`nf nf-oct-dot_fill ${
                  select_product.id == 3 ? "green" : ""
                }`}
                onClick={() => set_select_product(data[3])}
              ></i>
            </div>

            <div className="icon">
              <i className="nf nf-fa-caret_down"></i>
            </div>

            <div className={`social-media `}>
              <div
                className={`social-media-icons
               ${!showShare ? "display-none-social-media" : ""}
               `}
              >
                <i className="nf nf-dev-facebook"></i>
                <i className="nf nf-md-instagram"></i>
                <i className="nf nf-dev-twitter"></i>
              </div>

              <div className="toggle-social-media-icons">
                <div className="icon">
                  {showShare ? (
                    <CloseIcon
                      className="green"
                      onClick={() => setShowShare(false)}
                    />
                  ) : (
                    <ShareIcon onClick={() => setShowShare(true)} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
