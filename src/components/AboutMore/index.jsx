import PropTypes from "prop-types";
import { MoreInformation } from "./styles";

export default function AboutMore(props) {
  const { title } = props;
  return (
    <MoreInformation>
      <label>{title}</label>
      <img src="assets/case_more_information.svg" alt="more information" />
    </MoreInformation>
  );
}
AboutMore.propTypes = {
  title: PropTypes.string.isRequired,
};
