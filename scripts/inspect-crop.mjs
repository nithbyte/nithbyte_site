import sharp from "sharp";

async function inspectAndCrop() {
  const image = sharp("./nithbyte-logo.png");
  // Resize to 1000x1000 for fast accurate analysis
  const resized = await image.resize(1000, 1000).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = resized;
  const { width, height, channels } = info;

  console.log("Top-left pixel:", data[0], data[1], data[2]);

  let minX = width, minY = height, maxX = 0, maxY = 0;

  // Find pixels that are significantly darker or saturated (not background)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Exclude border edge noise: only check if x and y are within 10..width-10
      if (x < 10 || x > width - 10 || y < 10 || y > height - 10) continue;

      // Check if pixel is dark (black text) or orange (BYTE / logo)
      // Orange has high R, medium G, low B (e.g. r > 200, b < 100)
      // Black has low R, low G, low B (e.g. r < 150, g < 150, b < 150)
      const isBlack = r < 120 && g < 120 && b < 120;
      const isOrange = r > 180 && b < 100;

      if (isBlack || isOrange) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Normalized Bounding Box (in 1000x1000): left=${minX}, top=${minY}, right=${maxX}, bottom=${maxY}`);

  // Scale coordinates back to original 6000x6000
  const scale = 6;
  const origLeft = Math.max(0, minX * scale - 60);
  const origTop = Math.max(0, minY * scale - 60);
  const origWidth = Math.min(6000 - origLeft, (maxX - minX) * scale + 120);
  const origHeight = Math.min(6000 - origTop, (maxY - minY) * scale + 120);

  console.log(`Original Scale Crop: ${origWidth}x${origHeight} at (${origLeft}, ${origTop})`);

  // Crop and resize to clean sharp dimensions (e.g. width 1200, proportional height)
  await sharp("./nithbyte-logo.png")
    .extract({
      left: origLeft,
      top: origTop,
      width: origWidth,
      height: origHeight,
    })
    .resize({ width: 1200 })
    .png({ quality: 100 })
    .toFile("./public/images/nithbyte-logo.png");

  console.log("Successfully generated clean cropped logo!");
}

inspectAndCrop().catch(console.error);
