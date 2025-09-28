import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "cge",
        title: "CGE Currency Global",
        shortDescription: "System that manages currency exchange.",
        longDescription: "CGE is a software dedicated to currency exchange management, allowing users to perform conversions between different currencies with competitive rates.",
        link: "https://cge-exchange-development.greenstudio.workers.dev/",
        imageUrl: "/images/cge/mainpage.png",
        additionalImages: [
            "/images/cge/mainpage.png",
            "/images/cge/login.png",
            "/images/cge/signUp.png",
            "/images/cge/step1cart.png",
            "/images/cge/addressInformation.png",
            "/images/cge/pay.png",
        ],
        technologies: ["Next.js", "TypeScript", "Node.js", "Supabase", "TailwindCSS", "Cloudflare"],
        features: ["Currency conversion", "Shopping cart", "Transaction history", "Authentication system", "Admin panel"]
    },
    {
        id: "inOut-system",
        title: "InOut System",
        shortDescription: "InOut System is a fullstack application for income and expenses, with user control and report generation.",
        longDescription: "InOut System is a complete application for managing income and expenses, with user control and report generation. Developed with Next.js, TypeScript, TailwindCSS, BetterAuth Node.js and prisma.",
        link: "https://inout-system.vercel.app/",
        codeLink: "https://github.com/Jmchavarria/inout-system",
        imageUrl: "/images/inout/inout1.png",
        additionalImages: [
            "/images/inout/inout1.png",
            "/images/inout/inout2.png",
            "/images/inout/inout3.png",
        ],
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "BetterAuth", "Prisma"],
        features: ["Product catalog", "Shopping cart", "Authentication system", "Admin panel"]
    },
    {
        id: "motorbike",
        title: "Motorbike",
        shortDescription: "Platform for selling motorcycles and spare parts.",
        longDescription: "MotorBike is a complete platform for selling motorcycles and spare parts, with an inventory system, shopping cart, and integrated payment gateway. Developed with React, Node.js, and MongoDB.",
        link: "https://github.com/carlos2771/MotorBikeFull",
        codeLink: "https://github.com/carlos2771/MotorBikeFull",
        imageUrl: "/images/motorbike/motorbike1.png",
        additionalImages: [
            "/images/motorbike/motorbike1.png",
            "/images/motorbike/motorbike2.png",
            "/images/motorbike/motorbike3.png",
            "/images/motorbike/motorbike4.png",
            "/images/motorbike/motorbike5.png",
            "/images/motorbike/motorbike6.png",
            "/images/motorbike/motorbike7.png"
        ],
        technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
        features: ["Product catalog", "Shopping cart", "Authentication system", "Admin panel"]
    },
    {
        id: "barmanager",
        title: "Bar Manager",
        shortDescription: "System that manages bars and restaurants.",
        longDescription: "Bar Manager is a software dedicated to the management of bars and restaurants, with features for table administration, orders, and billing.",
        link: "https://barmanager.example.com/",
        imageUrl: "/images/bmg/login.jpg",
        additionalImages: [
            "/images/bmg/login.jpg",
            "/images/bmg/profile.webp",
            "/images/bmg/usersList.jpg",
            "/images/bmg/tableList.webp",
        ],
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Docker"],
        features: ["User table", "Table module", "Authentication system", "Admin panel"]
    },
];
