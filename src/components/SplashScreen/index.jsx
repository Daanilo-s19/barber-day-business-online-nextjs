import { useEffect } from "react";
import PropTypes from "prop-types";
import { Content } from "./styles";
import Router from "next/router";
import SocialMedia from "../SocialMedia";

export default function SplashScreen(props) {
  const { description } = props;
  return (
    <>
      <Content>
        <div id="logo-background">
          <img src="assets/logo.svg" alt="logo splash" />
          <div className="description">
            <label>{description}</label>
            <div className="loading">
              <div id="dot-one"></div>
              <div id="dot-two"></div>
              <div id="dot-three"></div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
SplashScreen.propTypes = {
  description: PropTypes.string.isRequired,
};
