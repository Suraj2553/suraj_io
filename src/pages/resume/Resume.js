import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import "./Resume.css";

function Resume(props) {
  const theme = props.theme;

  return (
    <div className="resume-main">
      <Header theme={theme} />

      <div className="resume-view">
        <div className="download-btn">
          <Button
            text="📄 Download Resume"
            newTab={true}
            href={greeting.resumeLink}
            theme={theme}
          />
        </div>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          If the download doesn’t start automatically,
          <br />
          <a href={greeting.resumeLink} target="_blank" rel="noreferrer">
            click here to open the resume
          </a>
        </p>
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Resume;
