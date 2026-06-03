import { Metadata } from "next";

export default function sitemap() {
  return [
    {
      url: "https://zain.dev",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
}
