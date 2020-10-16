import Button from "../Button";
import PropTypes from "prop-types";
import { Header } from "./styles";

export default function Hero(props) {
  const { title, textButton, activeButton, onChange } = props;
  return (
    <>
      <Header data-aos="fade-up">
        {/* <div id="polygon2"></div> */}
        <div></div>
        <div className="content">
          <h1>{title}</h1>
          <div className="custom-bottom">
            <div></div>
            <div id="disabled-color"></div>
            <div></div>
          </div>

          <div className="dash">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6raPNl-mfaI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
              <div className="play" onClick={() => setPlay(true)}>
                <img src="assets/method_play.svg" alt="method" />
              </div>
            </iframe>
          </div>
          <Button
            width="auto"
            image="assets/arrow_right.svg"
            bgColor="#2A9E98"
            childrenColor="#F0F4FA"
            shadow={true}
            bgHover="rgba(42, 158, 152, 1)"
            onClick={() => onChange(true)}
          >
            {textButton}
          </Button>
        </div>
        <div></div>
        {/* <div id="polygon1"></div> */}
      </Header>
    </>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  activeButton: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};