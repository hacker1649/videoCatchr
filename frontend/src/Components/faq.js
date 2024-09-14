import React, { useState } from "react";
import './css/style.css';

const FAQItem = ({ faq, index, activeIndex, toggle_function }) => {
  return (
    <div
      className={`faq-item ${activeIndex === index ? "active" : ""}`}
      key={index}
    >
      <button
        className="faq-question"
        onClick={() => toggle_function(index)}
      >{faq.question}</button>
      <div className="faq-answer"><p>{faq.answer}</p></div>
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle_function = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Youtube Video Downloader?",
      answer: "VideoCatchr offers a quick and free solution to effortlessly convert and download YouTube videos online while maintaining original quality. Download YouTube Videos on your smartphone, computer and tablets."
    },
    {
      question: "How to use VideoCatchr to download YouTube videos?",
      answer: "To download YouTube video using VideoCatchr, copy the video link and paste that URL into the search box on the VideoCatchr website. Next, click the download button. It's that easy!"
    },
    {
      question: "What are the benefits of using VideoCatchr?",
      answer: "The benefits of using the VideoCatchr tool include fast download speeds, no hidden fees or premium memberships, unlimited YouTube video conversions, and a secure YouTube video downloader for all devices and browsers."
    },
    {
      question: "What are the supported video formats?",
      answer: "We provide MP4 conversion options and allow you to download videos in this format. You can watch videos right after this without installing any other software on your device."
    },
    {
      question: "Is it possible to download videos from YouTube in a short time?",
      answer: "In most cases, videos can be converted and downloaded within seconds or minutes, depending on the video size, and speed of your internet connection.",
    },
    {
      question: "How can I download videos from Youtube playlists or channels with VideoCatchr?",
      answer: "If you want to download videos from entire YouTube playlists or channels, you can use VideoCatchr. Copy the playlist or channel URL and paste it into VideoCatchr's search bar. Next, click on the download button. It's that easy!",
    },
    {
      question: "Where are the downloaded videos saved?",
      answer: "All the videos downloaded using our tool are automatically saved to your default downloads folder, unless your browser gives you the option to select a different location for saving the video file.",
    },
  ];

  return (
    <div className="container">
      <div className="section">
        <h2 className="title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              activeIndex={activeIndex}
              toggle_function={toggle_function}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
