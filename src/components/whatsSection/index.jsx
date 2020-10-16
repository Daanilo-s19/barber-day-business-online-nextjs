/* eslint-disable react/react-in-jsx-scope */
import Button from "../Button";
import "./styles";
import { Container, Content } from "./styles";

export default function WhatsSection(props) {
  const { title, subtitle, description, labelButton, textButton } = props;
  return (
    <Container>
      <div className="polygon-left">
        <div className="polygon-right">
          <Content data-aos="fade-right">
            <div className="content-center-header whats-content">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <span>{description}</span>
              <span>{labelButton}</span>
              <Button
                width="332px"
                image="assets/arrow_right.svg"
                bgColor="#2A9E98"
                childrenColor="#F0F4FA"
                shadow={true}
                bgHover="rgba(42, 158, 152, 0.32)"
                onClick={() => onChange(true)}
              >
                {textButton}
              </Button>
            </div>
            <div className="image-phone" data-aos="flip-right">
              <img src="assets/Google-Pixel- 4-XL-Screen.svg" alt="phone" />
            </div>
          </Content>
        </div>
      </div>
    </Container>
  );
}
