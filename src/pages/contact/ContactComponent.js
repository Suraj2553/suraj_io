import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";

import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

// Direct import - webpack will handle this
import myProfileImage from "../../assets/images/animated_suraj.png";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          {/* CONTACT HEADER */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                {/* Use the imported image directly */}
                <img src={myProfileImage} alt="Contact" />
              </div>

              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData.title}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData.description}
                </p>

                <SocialMedia theme={theme} />

                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    href="/resume/Suraj_Kumar_Jha.pdf"
                    newTab={true}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>

          {/* ADDRESS & PHONE */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>

              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection.title}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection.subtitle}
                </p>

                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection.title}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection.subtitle}
                </p>

                <div className="address-btn-div">
                  <Button
                    text="View on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
