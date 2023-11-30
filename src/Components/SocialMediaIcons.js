import React from 'react';

// Import images for social media icons
import discordIcon from '../Assets/discord.png';
import telegramIcon from '../Assets/telegram.png';
import twitterIcon from '../Assets/twitter.png';
import mediumIcon from '../Assets/medium.png';
import instagramIcon from '../Assets/instagram.png';
import facebookIcon from '../Assets/facebook.png';
import youtubeIcon from '../Assets/youtube.png';

const SocialMediaIcons = () => {
  // Create an array of social media data (icon image, handle, link)
  const socialMediaData = [
    { image: discordIcon, handle: '@DiscordHandle', link: 'https://discord.com/' },
    { image: telegramIcon, handle: '@TelegramHandle', link: 'https://telegram.org/' },
    { image: twitterIcon, handle: '@TwitterHandle', link: 'https://twitter.com/' },
    { image: mediumIcon, handle: '@MediumHandle', link: 'https://medium.com/' },
    { image: instagramIcon, handle: '@InstagramHandle', link: 'https://www.instagram.com/' },
    { image: facebookIcon, handle: '@FacebookHandle', link: 'https://www.facebook.com/' },
    { image: youtubeIcon, handle: '@YoutubeHandle', link: 'https://www.youtube.com/' },
  ];

  // Function to open social media link in a new tab
  const openSocialMediaLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="social-media-icons" style={{ display: 'flex', justifyContent: 'center' }}>
      {socialMediaData.map((socialMedia, index) => (
        <div key={index} className="social-media-icon" style={{ margin: '3vw' }}>
          <img
            src={socialMedia.image}
            alt={`Social Icon ${index}`}
            title={socialMedia.handle}
            onClick={() => openSocialMediaLink(socialMedia.link)}
            style={{ width: '2.5vw', height: '2vw', cursor: 'pointer' }}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
