import PropTypes from "prop-types";
import SectionDefault from "../SectionDefault";
import { ItemService } from "./styles";

export default function ServicesSection(props) {
  const { title, subtitle, item } = props;
  return (
    <>
      <SectionDefault title={title} subtitle={subtitle}>
        {item &&
          item.map((element, index) => {
            return (
              <ItemService key={index} id="services">
                <img src={element.img} alt="image" />
                <strong>{element.title}</strong>
                <span>{element.subtitle}</span>
              </ItemService>
            );
          })}
      </SectionDefault>
    </>
  );
}
ServicesSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  item: PropTypes.any.isRequired,
};
