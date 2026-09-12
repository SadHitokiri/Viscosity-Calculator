import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Viscosity Calculator",
    short_name: "Viscosity",
    description: "Production time correction and viscosity calculator.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8f9",
    theme_color: "#f6f8f9",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
