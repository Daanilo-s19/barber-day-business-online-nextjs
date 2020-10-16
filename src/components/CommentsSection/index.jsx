import { useState } from "react";
import CarouselController from "../CarouselController";
import PropTypes from "prop-types";
import { Section } from "./styles";

export default function CommentsSection(props) {
  const { title, subtitle, comments } = props;
  const [controller, setController] = useState(1);
  return (
    <>
      <div className="content-center-header" data-aos="fade-up">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <Section data-aos="zoom-in-up">
        {comments &&
          comments.map((item, index) => {
            return (
              controller % comments.length === index && (
                <div key={index} className="comments">
                  <p>{item.comments}</p>
                  <div className="legends">
                    <div className="circle">
                      <img src={item.imageUser} alt="image user" />
                    </div>
                    <div>
                      <label>{item.name}</label>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        <CarouselController
          index={(comments ? controller % comments.length : 0) + 1}
          item={comments || []}
          dots={false}
          back={() => setController(controller - 1)}
          skip={() => setController(controller + 1)}
        />
      </Section>
    </>
  );
}

CommentsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  comments: PropTypes.any.isRequired,
};
