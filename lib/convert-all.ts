/* eslint-disable @typescript-eslint/no-require-imports */
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "videos"); // Input .mp4 folder
const outputDir = path.join(__dirname, "hls"); // HLS output base

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
  if (path.extname(file) === ".mp4") {
    const baseName = path.basename(file, ".mp4");

    const inputFile = path.join(inputDir, file);
    const videoFolder = path.join(outputDir, baseName); // Create subfolder per video

    if (!fs.existsSync(videoFolder)) {
      fs.mkdirSync(videoFolder, { recursive: true });
    }

    const outputPlaylist = path.join(videoFolder, `${baseName}.m3u8`);
    const segmentPattern = path.join(videoFolder, `${baseName}_%03d.ts`);

    const ffmpegCmd = `ffmpeg -i "${inputFile}" -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -hls_segment_filename "${segmentPattern}" -f hls "${outputPlaylist}"`;

    console.log(`Processing ${file}...`);

    exec(ffmpegCmd, (err: { message: string }, stdout, stderr) => {
      if (err) {
        console.error(`Error converting ${file}:`, err.message);
      } else {
        console.log(`Finished: ${baseName}`);
      }
    });
  }
});
