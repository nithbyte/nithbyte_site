import sharp from "sharp";
import fs from "fs";

async function processLogo() {
  const inputPath = "./nithbyte-logo.png";

  console.log("Processing logo from:", inputPath);

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log("Original Dimensions:", metadata.width, metadata.height);

  // 1. Trim whitespace automatically
  const trimmed = image.clone().trim({
    background: { r: 255, g: 255, b: 255 },
    threshold: 15
  });

  const trimmedBuffer = await trimmed.toBuffer();
  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log("Trimmed Dimensions:", trimmedMeta.width, trimmedMeta.height);

  // Save tight cropped version (with clean white background preserved or transparent)
  await sharp(trimmedBuffer)
    .png({ quality: 100 })
    .toFile("./public/images/nithbyte-logo.png");

  console.log("Saved tightly cropped: public/images/nithbyte-logo.png");

  // Also create a version where pure white background is made transparent
  const rawImage = await sharp(trimmedBuffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { data, info } = rawImage;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // If pixel is near white
    if (r > 240 && g > 240 && b > 240) {
      data[i + 3] = 0; // Transparent
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    }
  })
  .png({ quality: 100 })
  .toFile("./public/images/nithbyte-logo-transparent.png");

  console.log("Saved transparent logo: public/images/nithbyte-logo-transparent.png");

  // Create Mark-only variant (left side N-shaped technical icon)
  // The mark is approximately on the left 28% of the width
  const markWidth = Math.round(info.width * 0.28);
  await sharp(trimmedBuffer)
    .extract({
      left: 0,
      top: 0,
      width: markWidth,
      height: info.height
    })
    .trim({ threshold: 10 })
    .png({ quality: 100 })
    .toFile("./public/images/nithbyte-mark.png");

  console.log("Saved logo mark: public/images/nithbyte-mark.png");
}

processLogo().catch(console.error);
