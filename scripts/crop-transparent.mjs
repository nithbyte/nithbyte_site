import sharp from "sharp";

async function optimizeLogos() {
  const inputPath = "./nithbyte-logo.png";

  // 1. Trim transparent borders
  const trimmed = sharp(inputPath).trim({ threshold: 10 });
  const trimmedBuffer = await trimmed.toBuffer();

  // 2. Resize to high-DPI web resolution (1200px width is perfect for 4K / retina)
  const fullLogo = sharp(trimmedBuffer).resize({ width: 1200 });

  await fullLogo
    .png({ quality: 100, compressionLevel: 9 })
    .toFile("./public/images/nithbyte-logo.png");

  console.log("Saved optimized full logo: public/images/nithbyte-logo.png");

  // 3. White variant for dark backgrounds
  const rawObj = await sharp(trimmedBuffer)
    .resize({ width: 1200 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = rawObj;
  const whiteData = Buffer.from(data);

  for (let i = 0; i < whiteData.length; i += info.channels) {
    const r = whiteData[i];
    const g = whiteData[i + 1];
    const b = whiteData[i + 2];
    const a = whiteData[i + 3];

    if (a > 30) {
      // Orange has high red and low blue
      const isOrange = r > 180 && b < 100;
      if (!isOrange) {
        whiteData[i] = 255;
        whiteData[i + 1] = 255;
        whiteData[i + 2] = 255;
      }
    }
  }

  await sharp(whiteData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
  .png({ quality: 100, compressionLevel: 9 })
  .toFile("./public/images/nithbyte-logo-white.png");

  console.log("Saved optimized white logo: public/images/nithbyte-logo-white.png");

  // 4. Mark only variant (200px width)
  const markWidth = Math.round(info.width * 0.28);
  await sharp(trimmedBuffer)
    .extract({
      left: 0,
      top: 0,
      width: Math.round((await sharp(trimmedBuffer).metadata()).width * 0.28),
      height: (await sharp(trimmedBuffer).metadata()).height,
    })
    .trim({ threshold: 10 })
    .resize({ width: 256 })
    .png({ quality: 100 })
    .toFile("./public/images/nithbyte-mark.png");

  console.log("Saved mark variant: public/images/nithbyte-mark.png");
}

optimizeLogos().catch(console.error);
