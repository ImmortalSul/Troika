// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         Products: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         Products: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: 490,
//         },
//         Products: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links"},
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

// export const PRICING_Products = [
//     {
//         text: "Shorten links",
//         tooltip: "Create shortened links",
//     },
//     {
//         text: "Track clicks",
//         tooltip: "Track clicks on your links",
//     },
//     {
//         text: "See top countries",
//         tooltip: "See top countries where your links are clicked",
//     },
//     {
//         text: "Upto 10 tags",
//         tooltip: "Add upto 10 tags to your links",
//     },
//     {
//         text: "Community support",
//         tooltip: "Community support is available for free users",
//     },
//     {
//         text: "Priority support",
//         tooltip: "Get priority support from our team",
//     },
//     {
//         text: "AI powered suggestions",
//         tooltip: "Get AI powered suggestions for your links",
//     },
// ];

// export const WORKSPACE_LIMIT = 2;
export const PLANS = [
    {
        name: "Co-Founder",
        info: "Lead Creative Department",
        price: {
            monthly: "Chaitayna.S ",
            
        },
        Products: [
            { text: "Lead Designer & SM Manager" },
            { text: "1.5+ Years of Experience", tooltip:"Specialized in 3D, VFX and Logo illustrations and Photoshop" },
            { text: "Projects Built", tooltip:"McLaren 720S, Star Wars TIE Fighter, Space Marine, iPhone mock adverts, and other groundbreaking 3D creations." },
            { text: "Previous Roles", tooltip: "IIDE Digital Marketting Intern" },
            { text: "Blender Artist", },
            { text: "Tech Stack", tooltip: "Blender, Adobe Illustrator, Adobe after effects, Adobe premiere pro, Adobe photoshop, Autodesk Maya" },
        ],
        btn: {
            text: "Contact",
            href: "https://www.linkedin.com/in/chaitanyasardana/",//portfolio todo
            variant: "default",
        }
    },
    {
        name: "Founder",
        info: "Lead Dev + CEO",
        price: {
            monthly: "S Sulaiman",
            
        },
        Products: [
            { text: "Lead Developer & Creator" },
            { text: "4+ Years of Experience", tooltip:"Specialized in building SaaS platforms and Designing Websites"},
            { text: "Projects Built", tooltip:"Inquirix, Optix, Conferix, and other innovative tech solutions." },
            { text: "Previous Roles", tooltip: "Interned at Deloitte and Capgemini; Worked at early stage government funded startups." },
            { text: " Web3 & Full Stack Developer"},
            { text: "Tech Stack", tooltip: "TypeScript React TRPC AWS Azure Next.js Rust/Solana Three.js GoLang and Various Databases and ORMs" },
        ],
        btn: {
            text: "Contact",
            href: "https://sulaiweb.me/",//Portfolio todo lol
            variant: "purple",
        }
    },
    {
        name: "Co-Founder",
        info: "Founding Engineer",
        price: {
            monthly: "Pratyush Bose",
            yearly: Math.round(49 * 12 * (1 - 0.12)),
        },
        Products: [
            { text: "CTO & Project Lead" },
            { text: "2 Years of Experience", tooltip:"Specialized in cloud infrastructure and databse management"},
            { text: "Projects Built", tooltip:"AI SaaS platform, Trading website, AI resume builder, Android to-do app, and other next-gen tech solutions." },
            { text: "Previous Roles", tooltip: "Codemithra Intern" },
            { text: "Full Stack Developer",},
            { text: "Tech Stack", tooltip: "Java, SQL, Next.js, Tailwind, Typescript, Prismadb, MongoDB, AWS" },
        ],
        btn: {
            text: "Contact",
            href: "www.linkedin.com/in/pratyush-bose",//portfolio todo lol
            variant: "default",
        }
    }
];

export const PRICING_Products = [
    {
        text: "Shorten links",
        tooltip: "Create shortened links",
    },
    {
        text: "Track clicks",
        tooltip: "Track clicks on your links",
    },
    {
        text: "See top countries",
        tooltip: "See top countries where your links are clicked",
    },
    {
        text: "Upto 10 tags",
        tooltip: "Add upto 10 tags to your links",
    },
    {
        text: "Community support",
        tooltip: "Community support is available for free users",
    },
    {
        text: "Priority support",
        tooltip: "Get priority support from our team",
    },
    {
        text: "AI powered suggestions",
        tooltip: "Get AI powered suggestions for your links",
    },
];

export const WORKSPACE_LIMIT = 2;
