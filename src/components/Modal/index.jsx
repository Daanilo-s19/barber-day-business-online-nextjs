import Proptypes from "prop-types";
import { Container } from "./styles";
export default function Modal(props) {
  const { children, onChange } = props;

  return (
    <Container onClick={() => onChange(false)}>
      <div>{children}</div>
    </Container>
  );
}
Modal.propTypes = {
  onChange: Proptypes.func.isRequired,
};
