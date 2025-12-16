import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Cabañas Las Casonas",
    description:
      "Sitio web para complejo de cabañas. Desarrollo front‑end responsivo con foco en performance y SEO.",
    tags: ["React", "CSS"],
    liveUrl: "https://www.las-casonas.com.ar/",
    repoUrl: "https://github.com/maxiTiton/CabaniasLasCasonas",
    image: "/PortadaLasCasonas.png",
    slug: "las-casonas",
  },
  {
    title: "Cabañas Dos Lunas",
    description:
      "Web informativa para cabañas/turismo con diseño limpio, galerías y secciones esenciales.",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://www.doslunasonline.com.ar/",
    repoUrl: "https://github.com/maxiTiton/DosLunas",
    image: "/PortadaDosLunas.png",
    slug: "dos-lunas-online",
  },
  {
    title: "Gretta E-commerce",
    description:
      "Sistema e-commerce full stack para cafetería artesanal con integración de pagos, panel administrativo y gestión de pedidos en tiempo real.",
    tags: ["React", "Node.js", "PostgreSQL", "JavaScript", "Supabase", "REST APIs"],
    liveUrl: "https://gretta-go.vercel.app/",
    repoUrl: "https://github.com/maxiTiton/Gretta",
    image: "/PortadaGretta.png",
    slug: "gretta-ecommerce",
  },
];