import Button from "../Button";
import PropTypes from "prop-types";
import { Header } from "./styles";

export default function Hero(props) {
  const { title, textButton, onChange } = props;
  return (
    <>
      <Header data-aos="fade-up">
        <div className="polygon-left">
          <div className="polygon-right">
            <div className="content">
              <h1>{title}</h1>
              <div className="custom-bottom">
                <div></div>
                <div id="disabled-color"></div>
                <div></div>
              </div>

              <div className="dash ">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/IBXQqYNLA90"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  <div className="play" onClick={() => setPlay(true)}>
                    <img src="assets/method_play.svg" alt="method" />
                  </div>
                </iframe>
              </div>
              <Button
                width="332px"
                image="assets/arrow_right.svg"
                bgColor="#2A9E98"
                childrenColor="#F0F4FA"
                shadow={true}
                bgHover="rgba(42, 158, 152, 0.8)"
                onClick={() => onChange(true)}
              >
                {textButton}
              </Button>
              <div className="arrow-down">
                <div className="final-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  activeButton: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
