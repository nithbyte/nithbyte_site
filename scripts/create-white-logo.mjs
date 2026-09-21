import sharp from "sharp";

async function createWhiteVariant() {
  const inputBuffer = await sharp("./public/images/nithbyte-logo.png").raw().toBuffer({ resolveWithObject: true });
  const { data, info } = inputBuffer;
  const { width, height, channels } = info;

  // Create a copy for white text variant
  const whiteData = Buffer.from(data);

  for (let i = 0; i < whiteData.length; i += channels) {
    const r = whiteData[i];
    const g = whiteData[i + 1];
    const b = whiteData[i + 2];
    const a = whiteData[i + 3];

    if (a > 30) {
      // Check if it is the dark/black parts of "NITH" or the black part of the N mark
      // Orange has high red (r > 180) and low blue (b < 80)
      const isOrange = r > 180 && b < 100;
      
      if (!isOrange) {
        // It is black/dark gray text or mark -> turn into pure white #FFFFFF with same alpha
        whiteData[i] = 255;
        whiteData[i + 1] = 255;
        whiteData[i + 2] = 255;
      }
    }
  }

  await sharp(whiteData, {
    raw: {
      width,
      height,
      channels,
    }
  })
  .png({ quality: 100 })
  .toFile("./public/images/nithbyte-logo-white.png");

  console.log("Saved dark-mode white logo: public/images/nithbyte-logo-white.png");
}

createWhiteVariant().catch(console.error);
