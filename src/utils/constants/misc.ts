import { BarChart3Icon, FolderOpenIcon, Origami, Rocket, Telescope, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Ideation and Discovery",
        description: "We collaborate closely with you to understand your vision and define the problem you're solving.",
        icon: Telescope,
    },
    {
        title: "Design and Development",
        description: "Our experts bring your idea to life through thoughtful design and cutting-edge development, ensuring a polished, functional product.",
        icon: Origami,
    },
    {
        title: "Launch and Optimization",
        description: "We deploy the product and fine-tune it, ensuring it performs flawlessly and evolves with your needs.",
        icon: Rocket,
    },
] as const;

export const Products = [
    {
        title: "Inquirix",
        description: "Transforming PDFs into Interactive Knowledge.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    // Optix Review
    {
        name: "Samantha Lewis",
        username: "@samantha_lewis",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        rating: 5,
        review: "Optix has automated so many of my repetitive tasks. The time savings are unreal! This app is a lifesaver for any busy professional."
    },
    
    // Inquirix Review
    {
        name: "Rachel Anderson",
        username: "@rachel_anderson",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 5,
        review: "Inquirix has made studying PDFs a game-changer. Now, I can interact with content and get answers instantly. Love the simplicity!"
    },

    // Troika Hub (3D & VFX by Chaitanya) Review
    {
        name: "Olivia Turner",
        username: "@olivia_turner",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 5,
        review: "Troika Hub’s 3D models are on another level! Chaitanya’s work helped our project come alive. Phenomenal detail and artistry."
    },

    // Conferix Review
    {
        name: "Alexander Kim",
        username: "@alexander_kim",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 4,
        review: "Great for collaboration. Has a few minor tweaks I’d love, but overall, it’s now my preferred conferencing tool!"
    },

    // Mentorship and AI Generation by Pratyush Review
    {
        name: "Sophia Carter",
        username: "@sophia_carter",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        rating: 5,
        review: "Pratyush’s mentorship and AI tools have been invaluable. As a beginner, I couldn’t ask for a better guide in this field."
    },

    // Optix Review
    {
        name: "David Chen",
        username: "@david_chen",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        rating: 4,
        review: "Very intuitive and powerful automation. Still learning some features, but it’s already streamlined my work."
    },

    // Troika Hub (3D & VFX by Chaitanya) Review
    {
        name: "Ethan Wright",
        username: "@ethan_wright",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        rating: 5,
        review: "Can’t recommend Troika Hub enough for VFX. Their team goes above and beyond to deliver stunning visuals. Thank you!"
    },

    // Inquirix Review
    {
        name: "Liam Walker",
        username: "@liam_walker",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        rating: 4,
        review: "Great tool for turning documents into something so much more. It’s boosted my productivity beyond what I imagined."
    },

    // Conferix Review
    {
        name: "Isabella Green",
        username: "@isabella_green",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        rating: 5,
        review: "Conferix has made team meetings more interactive. Love the clarity and the extra features. It’s exactly what we needed."
    },

    // Mentorship and AI Generation by Pratyush Review
    {
        name: "Lucas Foster",
        username: "@lucas_foster",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        rating: 4,
        review: "The AI generation tools are extremely powerful and user-friendly. Pratyush’s mentorship was a bonus that made the learning curve easier!"
    },
] as const;
