import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import NFTClaim from "./NFTClaim";
import SocialMediaIcons from "./SocialMediaIcons";
import AboutBackground from "../Assets/about-background.png";

const Home = () => {
  const customFontStyle = {
    fontFamily: 'Arial, sans-serif', // Change this to your desired font family
    // You can also add more font properties like fontWeight, fontStyle, etc.
  };

  return (
    <div className="home-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section" style={customFontStyle}>
          <h1 className="primary-heading">
            Claim Your COM Airdrop
          </h1>
          <p className="primary-text">
            Claim Tutorial
          </p>
          <p className="primary-text">
            <NFTClaim />
          </p>
          <br />
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      <SocialMediaIcons />
    </div>
  );
};

export default Home;
