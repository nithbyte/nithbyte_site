import sharp from "sharp";

async function analyzeChannels() {
  const metadata = await sharp("./nithbyte-logo.png").metadata();
  console.log("Metadata:", metadata);

  const { data, info } = await sharp("./nithbyte-logo.png").resize(200, 200).raw().toBuffer({ resolveWithObject: true });
  console.log("Sample pixels (corner vs center):");
  console.log("Pixel (0,0):", data.slice(0, 4));
  console.log("Pixel (100,100):", data.slice(100 * 200 * 4, 100 * 200 * 4 + 4));

  // Let's sample a grid of pixels
  for (let y = 0; y < 200; y += 20) {
    let row = "";
    for (let x = 0; x < 200; x += 20) {
      const idx = (y * 200 + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
      if (a < 50) row += "·"; // Transparent
      else if (r > 200 && g > 200 && b > 200) row += "W"; // White
      else if (r > 150 && b < 100) row += "O"; // Orange
      else if (r < 50 && g < 50 && b < 50) row += "B"; // Black
      else row += "?";
    }
    console.log(row);
  }
}

analyzeChannels().catch(console.error);
