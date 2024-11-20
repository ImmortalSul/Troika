import { Calendar, FileText, HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon, Rotate3D, WaypointsIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Products",
        href: "/Products",
        menu: [
            {
                title: "Inquirix",
                tagline: "Transforming PDFs into Interactive Knowledge.",
                href: "/Products/link-shortening",
                icon: FileText,
            },
            {
                title: "3D & VFX",
                tagline: "Where Imagination Meets Realism in Every Frame.",
                href: "/Products/password-protection",
                icon: Rotate3D,
            },
            {
                title: "Optix",
                tagline: "Automate Your Tasks, Elevate Your Productivity.",
                href: "/Products/analytics",
                icon: WaypointsIcon,
            },
            {
                title: "AI Saas", //Todo
                tagline: "Empowering smarter solutions with AI-driven simplicity.",
                href: "/Products/qr-codes",
                icon: Calendar,
            },
        ],
    },
    {
        title: "Developers",
        href: "/developers",
    },
    {
        title: "Enterprise",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers to your questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
