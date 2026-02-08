import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        className="raw_logo"
        viewBox="0 0 440 305"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon */}
        <path
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476V86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234V160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          strokeWidth="4"
          fill="none"
        />

        {/* Initials */}
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="logo-text"
          fill={theme.body}
        >
          SJ
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
