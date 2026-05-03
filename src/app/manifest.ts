import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mourya J P - Portfolio",
    short_name: "Mourya",
    description: "Generative AI engineer and full-stack developer portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f14",
    theme_color: "#0f0f14",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
