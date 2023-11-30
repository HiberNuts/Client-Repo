import React from "react";

// Import images for social media icons
import discordIcon from "../Assets/discord.png";
import telegramIcon from "../Assets/telegram.png";
import twitterIcon from "../Assets/twitter.png";
import mediumIcon from "../Assets/medium.png";
import instagramIcon from "../Assets/instagram.png";
import facebookIcon from "../Assets/facebook.png";
import youtubeIcon from "../Assets/youtube.png";

const SocialMediaIcons = () => {
  // Create an array of social media data (icon image, handle, link)
  const socialMediaData = [
    { image: discordIcon, handle: "@DiscordHandle", link: "https://discord.gg/citizenofmetaland" },
    { image: telegramIcon, handle: "@TelegramHandle", link: "https://t.me/citizenofmetaland" },
    { image: twitterIcon, handle: "@TwitterHandle", link: "https://twitter.com/ctznofmetaland" },
    { image: mediumIcon, handle: "@MediumHandle", link: "https://t.me/citizenofmetaland" },
    { image: instagramIcon, handle: "@InstagramHandle", link: "https://www.instagram.com/" },
    { image: facebookIcon, handle: "@FacebookHandle", link: "https://www.facebook.com/citizenofmetaland" },
    { image: youtubeIcon, handle: "@YoutubeHandle", link: "https://www.youtube.com/c/CitizenofMetaland" },
  ];

  // Function to open social media link in a new tab
  const openSocialMediaLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="social-media-icons" style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {socialMediaData.map((socialMedia, index) => (
        <div key={index} className="social-media-icon" style={{}}>
          <img
            src={socialMedia.image}
            alt={`Social Icon ${index}`}
            title={socialMedia.handle}
            onClick={() => openSocialMediaLink(socialMedia.link)}
            style={{ width: "50px", height: "40px", margin: "5px", cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
