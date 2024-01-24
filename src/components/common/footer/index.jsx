import { config } from "@/helpers/config";
import React from "react";
import Logo from "../header/logo";
import MainMenu from "../header/main-menu";
import SocialMenu from "./social-menu";
import ContactMenu from "@/components/contact/contact-menu";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <Logo type="green"></Logo>
            <p>{config.project.description}</p>
          </div>

          <div className="col-sm-6 col-lg">
            <h3>Main Menu</h3>
            <MainMenu className="nav flex-column"></MainMenu>
          </div>
          <div className="col-sm-6 col-lg">
            <h3>Social</h3>
            <SocialMenu className="nav flex-column"></SocialMenu>
          </div>
          <div className="col-lg-3">
            <h3>Contact</h3>
            <ContactMenu className="nav flex-column"></ContactMenu>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
