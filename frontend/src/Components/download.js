import React, { useState } from "react";
import './css/style.css';

const Download = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageType, setMessageType] = useState(''); 

  const handleDownload = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType(''); 
    setIsLoading(true);

    if (!videoUrl) {
      setMessage('Please provide a valid YouTube URL.');
      setMessageType('error'); 
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setMessageType('success'); 
      } else {
        setMessage(`Error: ${data.message}`);
        setMessageType('error'); 
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      setMessageType('error'); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="section">
        <h1 className="title">YouTube Video Downloader</h1>
        <p>Easily download your favorite YouTube videos in high-quality MP4 format with just one click!</p>
        <form className="search-form" onSubmit={handleDownload}>
          <div className="input-container">
            <input
              className="search-input"
              type="text"
              placeholder="Type or Paste a valid YouTube URL here..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
            />
          </div>
          <button className="btn-red" type="submit" disabled={isLoading}>
            {isLoading ? 'Downloading...' : 'Download'}
          </button>
        </form>
        {isLoading && <div className="loader"></div>}
        {message && (
          <p className={`message ${messageType}`}>{message}</p> 
        )}
      </div>
    </div>
  );
}

export default Download;
