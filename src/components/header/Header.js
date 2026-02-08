import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  event.target.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  event.target.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <header className="header">
          <NavLink to="/home" className="logo">
            <span style={{ color: theme.text }}>&lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>

          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <NavLink
                to="/home"
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/education"
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Education and Certifications
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/experience"
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Experience
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </header>
      </Fade>
    );
  }
}

export default Header;
