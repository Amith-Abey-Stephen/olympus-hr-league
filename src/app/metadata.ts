import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const sharedMetadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    openGraph: {
        title: "Olympus – The HR Icon",
        description:
            "Bridge academic learning with real-world corporate decision-making",
        type: "website",
        url: siteConfig.url,
        images: [siteConfig.ogImage],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
    },
};
