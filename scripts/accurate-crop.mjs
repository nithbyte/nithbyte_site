import sharp from "sharp";

async function accurateCrop() {
  const inputPath = "./nithbyte-logo.png";
  const image = sharp(inputPath);
  
  // Resize to manageable processing size first or process raw
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // If pixel is not white (i.e. has color/darkness)
      if (r < 235 || g < 235 || b < 235) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Detected Bounding Box: left=${minX}, top=${minY}, right=${maxX}, bottom=${maxY}`);
  
  // Add small padding around the logo
  const padding = 40;
  const cropLeft = Math.max(0, minX - padding);
  const cropTop = Math.max(0, minY - padding);
  const cropWidth = Math.min(width - cropLeft, (maxX - minX) + padding * 2);
  const cropHeight = Math.min(height - cropTop, (maxY - minY) + padding * 2);

  console.log(`Cropping to: ${cropWidth}x${cropHeight} at (${cropLeft}, ${cropTop})`);

  const cropped = image.clone().extract({
    left: cropLeft,
    top: cropTop,
    width: cropWidth,
    height: cropHeight,
  });

  // Save full cropped logo
  await cropped
    .png({ quality: 100 })
    .toFile("./public/images/nithbyte-logo.png");

  console.log("Successfully saved tight cropped logo to public/images/nithbyte-logo.png");
}

accurateCrop().catch(console.error);
