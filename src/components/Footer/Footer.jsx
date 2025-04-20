import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="f-logo">
          <a href="/"><img src="../../public/icons/Logo.svg" alt="Morent logo" /></a>
          <p>
            Our vision is to provide convenience <br /> and help increase your sales
            business.
          </p>
        </div>
        <div className="f-about">
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="about">
            <h3>Community</h3>
            <ul>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="about">
            <h3>Socials</h3>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
