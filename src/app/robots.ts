// app/robots.ts
import { MetadataRoute } from "next";
export const dynamic = "force-static"; 

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mabsolinfotech.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"], // admin pages or API block
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
