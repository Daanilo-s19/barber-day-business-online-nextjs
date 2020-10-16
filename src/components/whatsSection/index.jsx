/* eslint-disable react/react-in-jsx-scope */
import Button from "../Button";
import "./styles";
import { Container } from "./styles";

export default function WhatsSection(props) {
  const { title, subtitle, description, labelButton, textButton } = props;
  return (
    <Container data-aos="fade-up">
      <div className="content">
        <div className="content-center-header">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{description}</p>
        </div>
        <p>{labelButton}</p>
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
      <div className="phone">
        <img src="assets/Google-Pixel- 4-XL-Screen.svg" alt="phone" srcset="" />
      </div>
    </Container>
  );
}
