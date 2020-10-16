import { useState, useEffect } from "react";
import SectionDefault from "../SectionDefault";
import { ItemBlog, Content } from "./styles";
import AboutMore from "../AboutMore";
import PropTypes from "prop-types";
import CarouselController from "../CarouselController";

export default function BlogSection(props) {
  const { title, subtitle, more, blog } = props;
  const [controller, setController] = useState(1);

  useEffect(() => {
    blogMobile();
  }, []);

  const blogMobile = () => {
    let arrays = [];
    blog &&
      blog.forEach((element) => {
        element.forEach((item) => {
          arrays.push(item);
        });
      });

    return arrays;
  };
  return (
    <>
      <SectionDefault title={title} subtitle={subtitle}>
        {blog &&
          blog.map((list, index) => {
            return (
              controller % blog.length === index &&
              list.map((element, index) => (
                <div key={index} className="content-web">
                  <ItemBlog assets={element.img}>
                    <div className="content-image">
                      <div className="tag">{element.tag}</div>
                    </div>
                    <div className="content">
                      <label>{element.title}</label>
                      <p>{element.description}</p>
                      <AboutMore title={more} />
                    </div>
                  </ItemBlog>
                </div>
              ))
            );
          })}

        <div className="content-mobile">
          {blog &&
            blogMobile().map((element, index) => {
              return (
                controller % blogMobile().length === index && (
                  <ItemBlog key={index} assets={element.img}>
                    <div className="content-image">
                      <div className="tag">{element.tag}</div>
                    </div>
                    <div className="content">
                      <label>{element.title}</label>
                      <p>{element.description}</p>
                      <AboutMore title={more} />
                    </div>
                  </ItemBlog>
                )
              );
            })}
        </div>
      </SectionDefault>
      <Content>
        <div className="content-web">
          <CarouselController
            dots={true}
            index={(blog ? controller % blog.length : 0) + 1}
            totalItem={blog.length}
            item={blog || []}
            back={() => setController(controller - 1)}
            skip={() => setController(controller + 1)}
          />
        </div>
        <div className="content-mobile">
          <CarouselController
            dots={true}
            index={(blogMobile() ? controller % blogMobile().length : 0) + 1}
            totalItem={blogMobile().length}
            item={blogMobile() || []}
            back={() => setController(controller - 1)}
            skip={() => setController(controller + 1)}
          />
        </div>
      </Content>
    </>
  );
}
BlogSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  more: PropTypes.string,
  blog: PropTypes.any.isRequired,
};
