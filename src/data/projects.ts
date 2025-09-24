import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "motorbike",
        title: "MOTORBIKE",
        shortDescription: "Plataforma de venta de motocicletas y repuestos.",
        longDescription: "MotorBike es una plataforma completa para la venta de motocicletas y repuestos, con sistema de inventario, carrito de compras y pasarela de pagos integrada. Desarrollada con React, Node.js y MongoDB.",
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
        features: ["Catálogo de productos", "Carrito de compras", "Sistema de autenticación", "Panel administrativo"]
    },
    {
        id: "inOut-system",
        title: "InOut System",
        shortDescription: "InOut System es una aplicación fullstack para la gestión de ingresos y egresos, con control de usuarios y generación de reportes.",
        longDescription: "InOut System es una aplicación completa para la gestión de ingresos y egresos, con control de usuarios y generación de reportes. Desarrollada con React, Node.js y MongoDB.",
        link: "https://inout-system.vercel.app/",
        codeLink: "https://github.com/Jmchavarria/inout-system",
        imageUrl: "/images/inout/inout1.png",
        additionalImages: [
            "/images/inout/inout1.png",
            "/images/motorbike/motorbike2.png",
            "/images/motorbike/motorbike3.png",
            "/images/motorbike/motorbike4.png",
            "/images/motorbike/motorbike5.png",
            "/images/motorbike/motorbike6.png",
            "/images/motorbike/motorbike7.png"
        ],
        technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
        features: ["Catálogo de productos", "Carrito de compras", "Sistema de autenticación", "Panel administrativo"]
    },
    {
        id: "barmanager",
        title: "Bar Manager",
        shortDescription: "Sistema que gestiona bares y restaurantes.",
        longDescription: "Bar manager es un software dedicado a la gestión de bares y restaurantes, con funcionalidades para la administración de mesas, pedidos y facturación.",
        link: "https://barmanager.example.com/",
        imageUrl: "/images/bmg/login.jpg",
        additionalImages: [
            "/images/bmg/login.jpg",
            "/images/bmg/profile.webp",
            "/images/bmg/usersList.jpg",
            "/images/bmg/tableList.webp",
        ],
        technologies: ["React", "Node.js", "Prisma", "TailwindCSS"],
        features: ["Tabla de usuarios", "Módulo de mesas", "Sistema de autenticación", "Panel administrativo"]
    },
    {
        id: "cge",
        title: "CGE Currency Global",
        shortDescription: "Sistema que gestiona el intercambio de monedas.",
        longDescription: "CGE es un software dedicado a la gestión de intercambios de monedas, permitiendo a los usuarios realizar conversiones entre diferentes divisas con tarifas competitivas.",
        link: "https://cge-exchange-development.greenstudio.workers.dev/",
        imageUrl: "/images/cge/mainpage.png",
        additionalImages: [
            "/images/cge/mainpage.png",
            "/images/cge/login.png",
            "/images/cge/signUp.png",
            "/images/cge/step1cart.png",
            "/images/cge/addressInformation.png",
            "/images/cge/pay.png",
            "/images/cge/cge2.png",
            "/images/cge/cge3.png",
            "/images/cge/cge4.png",
            "/images/cge/cge5.png"
        ],
        technologies: ["Next.js", "Node.js", "Supabase", "TailwindCSS", "Cloudflare"],
        features: ["Conversión de divisas", 'Carrito de compras', "Historial de transacciones", "Sistema de autenticación", "Panel administrativo"]
    }
];