import { useState } from "react";
// import Link from "next/link";
import Button from "../Button";
import PropTypes from "prop-types";
import { Navbar, Dropdown } from "./styles";

export default function Menu(props) {
  // const { item, onChange } = props;
  // const [menuDropdown, setMenuDropdown] = useState(false);

  return (
    <>
      <Navbar data-aos="fade-down">
        <div className="content">
          <div className="content-logo">
            <img src="assets/logo.svg" alt="logan" />
          </div>
          <div className="content-countdown">
            <label>As inscrições se encerram em:</label>
            <div className="countdown">
              <div>
                <h4>06</h4>
                <span>Dias</span>
              </div>
              <div>
                <h4>15</h4>
                <span>Horas</span>
              </div>
              <div>
                <h4>40</h4>
                <span>Minutos</span>
              </div>
              <div>
                <h4>29</h4>
                <span>segundos</span>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
Menu.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
