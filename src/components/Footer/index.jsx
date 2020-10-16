import SocialMedia from "../SocialMedia";
import { Footerdefault, BorderTop } from "./styles";

export default function Footer(props) {
  const { item, designer, tag } = props;
  return (
    <>
      <BorderTop data-aos="fade-up" />
      <Footerdefault data-aos="fade-up">
        <div className="header">
          <img id="slogan" src="assets/slogan.svg" alt="slogan" />
          <div className="content">
            <SocialMedia />
            <div className="content-menu">
              {item.menu &&
                item.menu.map((item, index) => (
                  <a href={item.link} key={index}>
                    {item.name}
                  </a>
                ))}
            </div>
            {/* <div className="content-tag">
              <div>{item.tag}</div>
            </div> */}
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © 2020 Space Rocket.</span>
          <span>{item.designer}</span>
        </div>
      </Footerdefault>
    </>
  );
}
