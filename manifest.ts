import type { MetadataRoute } from "next";
import { company } from "@/data/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "TECH-INNOV",
    description: company.slogan,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0B1F4D",
    icons: [
      {
        src: "/favicon.png",
        sizes: "1024x1024",
        type: "image/png"
      }
    ]
  };
}
