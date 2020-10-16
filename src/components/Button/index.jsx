import PropTypes from "prop-types";
import { ButtonDefault } from "./styles";

export default function Button(props) {
  const {
    children,
    childrenColor,
    bgColor,
    bgHover,
    shadow,
    onClick,
    width,
    image,
  } = props;
  return (
    <ButtonDefault
      width={width}
      background={bgColor}
      backgroundHover={bgHover}
      shadow={shadow}
      color={childrenColor}
      onClick={onClick}
    >
      {children}
      {image ? <img src={image} alt="alavancar" id="image" /> : null}
    </ButtonDefault>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  background: PropTypes.string,
  bgHover: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  childrenColor: PropTypes.string,
  bgColor: PropTypes.string,
  shadow: PropTypes.bool,
};
