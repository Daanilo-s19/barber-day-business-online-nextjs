import { useState } from "react";
import PropTypes from "prop-types";

import { Section } from "./styles";

export default function OurAbout(props) {
  const { description, item } = props;
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    item.sort(() => Math.random() - 0.5);
    setTimeout(() => {
      setUpdate(!update);
    }, 15000);
  };

  const recursiveAbout = (index) => {
    let mainClass = "";

    switch (index) {
      case 0:
        mainClass = "orbit-one";
        break;
      case 1:
        mainClass = "orbit-two";
        break;
      case 2:
        mainClass = "orbit-three";
        break;

      default:
        break;
    }
    if (index === 3) {
      return (
        <div className="content">
          <div></div>
          <div className="content-main">
            <div className="circle">
              <span>Trabalhe conosco</span>
              <img
                src="assets/case_more_information.svg"
                alt="trabelhe conosco"
              />
            </div>
          </div>
          <div></div>
        </div>
      );
    }

    return (
      <div className={mainClass}>
        {item.slice(index * 4, index * 4 + 4).map((element, index) => {
          let positionUser = "";
          switch (index) {
            case 0:
              positionUser = "user top";
              break;
            case 1:
              positionUser = "user left";
              break;
            case 2:
              positionUser = "user right";
              break;
            case 3:
              positionUser = "user bottom";
              break;

            default:
              break;
          }
          return element ? (
            <div key={index} className={positionUser}>
              {/* <h2>{element.name}</h2> */}
              <img src={element.imgUser} alt="spacer" />
            </div>
          ) : (
            <div key={index} className={positionUser + " without-border"}></div>
          );
        })}

        {recursiveAbout(index + 1)}
      </div>
    );
  };
  return (
    <Section>
      <div className="content-header">
        <div className="header">
          <img id="slogan" src="assets/slogan.svg" alt="slogan" />
          <img src="assets/ellipse_about.svg" id="ellipse" />
        </div>
        <div className="description">{description}</div>
      </div>
      {recursiveAbout(0)}
      {handleUpdate()}
    </Section>
  );
}
OurAbout.propTypes = {
  description: PropTypes.object.isRequired,
};
