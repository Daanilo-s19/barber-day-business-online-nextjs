import PropTypes from "prop-types";
import { Banner } from "./styles";
import Button from "../Button";
export default function BannerStarted(props) {
  const { title, subtitle, button, onChange } = props;

  return (
    <>
      <Banner data-aos="zoom-in-up">
        <div>
          <h4>{title}</h4>
          <span>{subtitle}</span>
        </div>
        <img src="assets/line_banner.svg" alt="line banner" />
        <Button
          onClick={() => onChange(true)}
          bgColor="#C7DEFF"
          bgHover="#ebf3ff"
          childrenColor="#552EE5"
          shadow={true}
        >
          {button}
        </Button>
      </Banner>
    </>
  );
}
BannerStarted.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
