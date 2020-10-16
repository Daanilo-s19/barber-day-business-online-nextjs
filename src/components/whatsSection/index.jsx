/* eslint-disable react/react-in-jsx-scope */
import "./styles";
import { Container } from "./styles";

export default function WhatsSection(props) {
  const { title, subtitle } = props;
  return (
    <Container>
      <div className="content-center-header" data-aos="fade-up">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <img src="" />
    </Container>
  );
}
