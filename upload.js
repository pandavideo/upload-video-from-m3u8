const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

// Header
const API_KEY = ""; // (required)

// Body
const folder_id = false; // (optional) | obs: The folder you wanna put your video
const video_id = uuidv4(); // (optional) | obs: You can put an especific uuid for your video, or let it generate one.
const title = "example video"; // (optional) | obs: title is your video name
const description = ""; // (optional)
const hls_encryption = false; // (optional)
const url = "https://..."; // (required) | obs: m3u8 url


const uploadVideo = async () => {
  try {
    const data = {
      folder_id,
      video_id,
      title,
      description,
      url,
      hls_encryption
    };

    const response = await axios.post(
      "https://import.pandavideo.com:9443/videos/m3u8",
      data,
      {
        headers: {
          authorization: API_KEY,
        },
      }
    );

    const ret = response.data
    console.log(
    "UPLOAD IN PROGRESS, you can check upload status in:",
    ret
    );
  } catch (error) {
    console.log("UPLOAD ERROR:", error.response.data);
  }
};

uploadVideo();