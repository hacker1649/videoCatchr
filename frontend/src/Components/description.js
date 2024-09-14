import React from "react";
import clock from "../Images/clock.svg";
import limit from "../Images/limit.svg";
import safe from "../Images/safe.svg";
import platform from "../Images/platform.svg";
import support from "../Images/support.svg";
import cloud from "../Images/cloud.svg";
import './css/style.css';

const FeatureCard = ({ title, description, image, alt_text, className }) => {
  return (
    <div className="list-item">
      <div className={`post-image ${className}`}>
        <img src={image} alt={alt_text} />
      </div>
      <div className="post-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Description = () => {
  const features = [
    {
      title: 'Fast and easy video conversion',
      description: 'We use the latest technologies for encoding system, so you don\'t have to wait much for the conversion.',
      image: clock,
      alt_text: 'Fast and easy to use',
      className: 'bg1',
    },
    {
      title: 'Without Limits',
      description: 'Download and convert YouTube videos as you want without any length limits and always for free.',
      image: limit,
      alt_text: 'Without limitation',
      className: 'bg2',
    },
    {
      title: '100% Safe and Hygienic',
      description: 'This Video Downloader service is completely clean without any viruses under close supervision based on security database.',
      image: safe,
      alt_text: 'Safe and Clean',
      className: 'bg3',
    },
    {
      title: 'All platforms supported',
      description: 'Supports all browsers (Chrome, FireFox, ...) and personal devices such as mobile phones (Android, iOS, iPhone, ..) PCs, laptops and tablets (Ipad...).',
      image: platform,
      alt_text: 'Full platforms supported',
      className: 'bg4',
    },
    {
      title: 'Full file format supported',
      description: 'We support only one video format conversion. We provide MP4 conversion options and allow you to download videos in this format.',
      image: support,
      alt_text: 'Full file format supported',
      className: 'bg5',
    },
    {
      title: 'Cloud support',
      description: 'We support uploading the converted files to your Dropbox and Google Drive.',
      image: cloud,
      alt_text: 'Cloud support',
      className: 'bg6',
    },
  ];

  return (
    <div className="container">
      <div className="section">
        <h2 className="title">The Best & Easy Youtube Downloader</h2>
        <div className="txt-box">
          <p>VideoCatchr is a free online YouTube video downloader that allows users to download videos from YouTube instantly and easily. Simply paste a YouTube link in the serch box above and download your favorite videos right away.</p>
          <br />
          <p>Have you ever wanted to download your favorite video from YouTube without the hassle? Now, you can with YouTube Downloader! Our easy-to-use tool will have you downloading high quality videos faster than ever. See how quickly and efficiently you can get those viral videos and favourite clips onto your phone or computer soon. From movies and TV shows to the latest music videos, free up your time and don't miss out on all the action. Get YouTube Downloader today and start making the most of digital media!</p>
          <br />
          <p>Are you tired of buffering YouTube videos or being unable to watch them offline? Do you want a way to save your favorite videos on your device for later viewing? Look no further than the YouTube downloader! With this powerful tool, you can easily download and save any YouTube video in just a few clicks. Say goodbye to internet woes and enjoy uninterrupted entertainment with the help of our ultimate guide to using a YouTube downloader. Let's get started!</p>
        </div>
        <div className="list">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
