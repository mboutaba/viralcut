import path from "path";
import fs from "fs";
import { runFFmpeg } from "./ffmpeg";
import { generateQuote } from "../generator/quotes";
import { getMusic } from "../generator/music";

type GeneratePayload = {
  style: "beach" | "forest" | "mountain" | "temple";
  mood: "calm" | "focus" | "motivation";
  subject: string;
};

export async function generateMeditationShort({
  style,
  mood,
  subject,
}: GeneratePayload): Promise<string> {
  // Paths
  const backgroundsDir = path.join(
    process.cwd(),
    "public/assets/backgrounds",
    style
  );

  const musicPath = path.join(
    process.cwd(),
    "public/assets/music",
    mood,
    "1.mp3"
  );

  const outputDir = path.join(process.cwd(), "public", "videos");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  const outputFile = `video_${Date.now()}.mp4`;
  const outputPath = path.join(outputDir, outputFile);

  // Pick random background
  const bgFiles = fs
    .readdirSync(backgroundsDir)
    .filter((f) => f.endsWith(".mp4"));

  if (bgFiles.length === 0) {
    throw new Error("No background videos found");
  }

  const bgVideo = path.join(
    backgroundsDir,
    bgFiles[Math.floor(Math.random() * bgFiles.length)]
  );

  // Generate quote
  const quote = generateQuote(subject).replace(/'/g, "\\'");

  // FFmpeg command
  const ffmpegCmd = `ffmpeg -y -i "${bgVideo}" -i "${musicPath}" -vf "scale=1080:1920,drawtext=text='${quote}':fontfile=public/assets/fonts/Serif.ttf:fontsize=48:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2" -t 15 -shortest "${outputPath}"`;

  console.log("🎬 Rendering video...");
  console.log("📝 FFmpeg command:", ffmpegCmd);
  try {
    runFFmpeg(ffmpegCmd);
    // Verify the file was created
    if (!fs.existsSync(outputPath)) {
      throw new Error(`Video file was not created at ${outputPath}`);
    }
    console.log("✅ Video generated:", outputFile);
  } catch (error) {
    console.error("❌ FFmpeg error:", error);
    throw error;
  }

  return `/videos/${outputFile}`;
}
