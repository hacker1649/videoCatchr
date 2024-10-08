import React from "react";
import './css/style.css';

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <a className="logo" href="/?l=en">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 37 28" fill="none" alt="This is the logo...">
            <g clip-path="url(#clip0)">
              <path d="M0.413567 5.80249C0.646742 2.9375 2.94402 0.705376 5.81232 0.517162C9.497 0.275378 14.5363 0 18.375 0C22.2137 0 27.253 0.275378 30.9377 0.517162C33.806 0.705375 36.1033 2.9375 36.3364 5.80249C36.5469 8.38873 36.75 11.5252 36.75 14C36.75 16.4748 36.5469 19.6113 36.3364 22.1975C36.1033 25.0625 33.806 27.2946 30.9377 27.4828C27.253 27.7246 22.2137 28 18.375 28C14.5363 28 9.497 27.7246 5.81232 27.4828C2.94402 27.2946 0.646742 25.0625 0.413567 22.1975C0.203079 19.6113 0 16.4748 0 14C0 11.5252 0.203079 8.38873 0.413567 5.80249Z" fill="#FF0000"></path>
              <path d="M11.1223 8.18535L8 11.1334L18 21L28 11.1334L24.8777 8.18535L20.1879 12.8132V0H15.8121V12.8132L11.1223 8.18535Z" fill="white"></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="36.75" height="28" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <span>VideoCatchr</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
