import PropTypes from "prop-types";
import SectionDefault from "../SectionDefault";
import { ItemPress } from "./styles";
import AboutMore from "../AboutMore";
import { useState } from "react";

export default function PressSection(props) {
  const { title, subtitle, item, more } = props;
  const [controller, setController] = useState(1);

  return (
    <SectionDefault title={title} subtitle={subtitle}>
      {item &&
        item.map((list, index) => {
          return (
            controller % item.length === index &&
            list.map((element, index) => (
              <ItemPress key={index} assets={element.img}>
                <a href={element.link} target="_blank">
                  <div className="content-image">
                    <div className="filter" />
                  </div>
                  <div className="content">
                    <label>{element.title}</label>
                    <p>{element.description}</p>
                    <AboutMore title={more} />
                  </div>
                </a>
              </ItemPress>
            ))
          );
        })}
    </SectionDefault>
  );
}
PressSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  item: PropTypes.any.isRequired,
  more: PropTypes.string,
};
