// app/sitemap.ts
import { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mabsolinfotech.com";

  return [
    {
      url: `${baseUrl}/`, // Home page
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Optional: Sections on Home page (anchor URLs)
    {
      url: `${baseUrl}/#about-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/#our-products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/#contact-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
