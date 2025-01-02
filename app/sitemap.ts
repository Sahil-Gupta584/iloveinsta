import { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap {
return [
    {
        url:'https://iloveinsta.vercel.app',
        priority:1
    },
    {
        url:'https://iloveinsta.vercel.app/stories',
        priority:0.8
    },
]
}