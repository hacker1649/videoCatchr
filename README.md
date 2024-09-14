# VideoCatchr - YouTube Video Downloader

VideoCatchr is a simple YouTube video downloader that lets you download your favorite YouTube videos with ease. Simply paste the link, and get your video saved directly to your device. 

Developed using ReactJS for the frontend and Node.js with the ytdl-core package for the backend API.

## Features
✔️ **Download YouTube Videos:** Enter the URL of any YouTube video to download it in the MP4 format.

✔️ **ReactJS Frontend:** Interactive and responsive user interface built with ReactJS.

✔️ **Node.js Backend:** Backend API built with Node.js to handle video download requests using the ytdl-core package.

## Tech Stack

- **Frontend:** ReactJS
- **Backend:** Node.js, Express
- **Video Downloading:** ytdl-core npm package
- **Styling:** CSS

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/hacker1649/videoCatchr.git
cd videoCatchr
```

2. Backend setup:

Navigate to the `backend` directory and install the dependencies:

```bash
cd backend
npm install express
npm install cors
npm install @distube/ytdl-core
```

3. Frontend setup:

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

## Running the application:

Open two terminals, one for the backend and one for the frontend:

1. Start the backend:

```bash
cd backend
node api.js
```

2. Start the frontend:

```bash
cd frontend
npm start
```

The application should now be running at http://localhost:3000.

## Usage

- Go to the YouTube. Watch your desired video and copy the link as you wish to download it in an MP4 file.
- Paste the YouTube video URL or enter keywords in the search box.
- Click onto the "Download" button.
- Now, sit back and wait for the process to complete and then download the file easy, fast and free.
- The video will be downloaded to your device and automatically saved in your default downloads directory.

## Future Enhancements

- Add options for different video formats (MP4, WebM, etc.).
- Implement a progress bar to show download progress.
- Deploy the website to a live server for public access.

