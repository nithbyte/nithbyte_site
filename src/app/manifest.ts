import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NithByte — Where Ideas Find Their Code",
    short_name: "NithByte",
    description: "NithByte designs and engineers digital products, SaaS platforms, and intelligent solutions for modern businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0B",
    theme_color: "#FF6A00",
    icons: [
      {
        src: "/images/nithbyte-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/nithbyte-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
