const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

// Header
const API_KEY = "panda-f9935ee4507939bd9542ac5e5379f8d177574e2411e8e72d132518cef1dee09e"; // (required)

// Body
const folder_id = "3199ff87-1ab6-4188-a76a-2aa14c21d9b3"; // (optional) | obs: The folder you wanna put your video
const video_id = uuidv4(); // (optional) | obs: You can put an especific uuid for your video, or let it generate one.
const title = "video panda"; // (optional) | obs: title is your video name
const description = ""; // (optional)
const hls_encryption = false; // (optional)
const url = "https://b-vz-ded14ebd-85a.tv.pandavideo.com.br/79cb9b0e-a64b-4485-8a44-47f36b292e4c/playlist.m3u8"; // (required) | obs: url is an external video url


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