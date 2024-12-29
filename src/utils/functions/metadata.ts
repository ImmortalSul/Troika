import { Metadata } from "next";

export const generateMetadata = ({
    title = "Troika Hub - Crafting Digital Solutions with Precision and Creativity",
    description = "Troika Hub - Where ideas come to life with precision and creativity. Explore our innovative projects and services.",
    image = "/Troika_meta_data_picture.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        }
    ]
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
} = {}): Metadata => {
    return {
        title,
        description,
        icons,
        openGraph: {
            title,
            description,
            ...(image && { images: [{ url: image }] })
        },
        twitter: {
            title,
            description,
            ...(image && { card: "summary_large_image", images: [image] }),
            creator: "@ImmortalSul"
        },
        robots: {
            index: true, 
            follow: true 
        },
        metadataBase: new URL("https://troikahub.tech")
    };
};
