const express = require('express');
const cors = require('cors');
const fs = require('fs');
const ytdl = require("@distube/ytdl-core");
const path = require('path');
const os = require('os');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend API is working! Use the /download route to download videos.');
});

app.post('/download', async (req, res) => {
  const { url } = req.body;

  try {
    console.log('Fetching video information...');
    const info = await ytdl.getInfo(url);
    
    const title = info.videoDetails.title.replace(/[/\\?%*:|"<>]/g, '-');
    console.log("Downloading: ", title);

    const downloadsFolder = path.join(os.homedir(), 'Downloads');
    const outputPath = path.join(downloadsFolder, `${title}.mp4`);

    const video = ytdl(url, {
      filter: format => format.container === 'mp4' && format.hasVideo && format.hasAudio,
      quality: 'highest',
      highWaterMark: 1024 * 1024 * 10,
      requestOptions: {
        timeout: 30000,
        headers: {
          Connection: 'keep-alive',
        }
      }
    });

    video.pipe(fs.createWriteStream(outputPath));

    video.on('end', () => {
      console.log('Download completed successfully.');
      res.json({ message: 'Download completed successfully.', path: outputPath });
    });

    video.on('error', (err) => {
      console.error('Error during download:', err.message);
      res.status(500).json({ message: 'Error during download', error: err.message });
    });

  } catch (err) {
    console.error('Error fetching video info:', err.message);

    res.status(500).json({ message: 'Error fetching video info', error: err.message });

    if (err.message.includes('Unable to retrieve video metadata')) {
      console.log('Retrying in 5 seconds...');
      setTimeout(() => downloadVideo(url, outputPath), 5000);
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
