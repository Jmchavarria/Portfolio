import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "octi",
    title: "Octi",
    shortDescription:
      "Una plataforma web moderna para la gestión de tareas y usuarios, construida con Next.js, TypeScript y Supabase.",
    longDescription:
      "Una plataforma web full-stack moderna y responsiva orientada a la productividad individual y de equipo. Permite a los usuarios organizar sus tareas diarias mediante flujos de trabajo eficientes, gestionar sus perfiles y mantener un sistema de autenticación seguro.",
    link: "https://todolist-app-sigma-topaz.vercel.app/",
    imageUrl: "/images/octi/octi1.png",
    additionalImages: ["/images/octi/octi1.png"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Base UI",
      "Lucide React",
    ],
    features: [
      "Gestión de tareas",
      "Gestión de usuarios",
      "Sistema de autenticación",
      "Gestión de perfiles",
      "Flujos de trabajo",
    ],
  },
  {
    id: "cge",
    title: "CGE Currency Global",
    shortDescription:
      "Plataforma web para la gestión y conversión de diferentes monedas.",
    longDescription:
      "CGE es una plataforma dedicada a la gestión del cambio de divisas, permitiendo realizar conversiones entre diferentes monedas y gestionar operaciones relacionadas con el proceso de compra.",
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
      "Cloudflare",
    ],
    features: [
      "Conversión de divisas",
      "Carrito de compras",
      "Historial de transacciones",
      "Sistema de autenticación",
      "Panel administrativo",
    ],
  },
  {
    id: "inOut-system",
    title: "InOut System",
    shortDescription:
      "Aplicación full-stack para la gestión de ingresos y gastos, control de usuarios y generación de reportes.",
    longDescription:
      "InOut System es una aplicación completa para administrar ingresos y gastos, gestionar usuarios y generar reportes. Fue desarrollada con Next.js, TypeScript, Tailwind CSS, BetterAuth, Node.js y Prisma.",
    link: "https://inout-system.vercel.app/",
    codeLink: "https://github.com/Jmchavarria/inout-system",
    imageUrl: "/images/inout/inout1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "BetterAuth",
      "Prisma",
    ],
    features: [
      "Gestión de ingresos y gastos",
      "Control de usuarios",
      "Generación de reportes",
      "Sistema de autenticación",
      "Panel administrativo",
    ],
  },
  {
    id: "motorbike",
    title: "Motorbike",
    shortDescription:
      "Plataforma web para la venta de motocicletas y repuestos.",
    longDescription:
      "MotorBike es una plataforma completa para la venta de motocicletas y repuestos, con sistema de inventario, carrito de compras y pasarela de pagos integrada. Fue desarrollada con React, Node.js y MongoDB.",
    link: "https://motorbikefull.onrender.com/",
    codeLink: "https://github.com/carlos2771/MotorBikeFull",
    imageUrl: "/images/motorbike/motorbike1.png",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Sistema de autenticación",
      "Gestión de inventario",
      "Panel administrativo",
    ],
  },
  {
    id: "barmanager",
    title: "Bar Manager",
    shortDescription: "Sistema de gestión para bares y restaurantes.",
    longDescription:
      "Bar Manager es un software orientado a la gestión de bares y restaurantes, con funcionalidades para administrar usuarios, mesas, pedidos y procesos relacionados con la operación del establecimiento.",
    link: "https://barmanager.example.com/",
    imageUrl: "/images/bmg/login.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Docker"],
    features: [
      "Gestión de usuarios",
      "Gestión de mesas",
      "Sistema de autenticación",
      "Panel administrativo",
    ],
  },
];
