import PropTypes from "prop-types";
import { Item, Section } from "./styles";

export default function AwardsSection(props) {
  const { title, subtitle, item } = props;
  return (
    <Section data-aos="fade-up">
      <div className="content-header">
        <div className="title">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <div className="border" data-aos="fade-right" data-aos-delay="300">
          <img src="assets/gradient_responsive.svg" alt="gradient responsive" />
        </div>
      </div>
      <div className="content-item">
        <div className="content-alignment-flex ">
          {item &&
            item.map((element, index) => {
              return (
                <div key={index}>
                  <Item>
                    <div className="circle">
                      <strong id="years">{element.years}</strong>
                      <strong
                        className={index == 1 ? "local fontSize" : "local"}
                      >
                        {element.local}
                      </strong>
                      <strong id="awards">{element.awards}</strong>
                    </div>
                  </Item>
                </div>
              );
            })}
        </div>
        <div className="content-alignment-responsive">
          {item &&
            item.map((element, index) => {
              let alignClass = "";
              switch (index % 3) {
                case 0:
                  alignClass = "align-top-left";
                  break;
                case 1:
                  alignClass = "align-top-right";
                  break;
                case 2:
                  alignClass = "align-top-center";
                  break;
                default:
                  alignClass = "align-top-center";
                  break;
              }
              return (
                <div key={index} className={alignClass}>
                  <Item>
                    <div className="circle">
                      <strong id="years">{element.years}</strong>
                      <strong className="local">{element.local}</strong>
                      <strong id="awards">{element.awards}</strong>
                    </div>
                  </Item>
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
}
AwardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  item: PropTypes.any.isRequired,
};
