import type { Project } from '~/types/project'

/**
 * Manually curated portfolio projects: the single source of truth for the projects page.
 *
 * - Every text field must be written in Catalan, Spanish and English.
 * - `status` and `context` must describe the real situation; omit them when not confirmed.
 * - Do not add placeholder projects, invented dates, client relationships or metrics.
 */
export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: {
      ca: 'Personal Portfolio',
      es: 'Personal Portfolio',
      en: 'Personal Portfolio'
    },
    description: {
      ca: 'Portfolio multilingüe modern construït amb Nuxt 3, Vue, TypeScript i Tailwind CSS, amb disseny responsive, optimització SEO i una arquitectura reutilitzable.',
      es: 'Portfolio multilingüe moderno construido con Nuxt 3, Vue, TypeScript y Tailwind CSS, con diseño responsive, optimización SEO y una arquitectura reutilizable.',
      en: 'Modern multilingual portfolio built with Nuxt 3, Vue, TypeScript and Tailwind CSS, featuring responsive design, SEO optimisation and a reusable architecture.'
    },
    status: 'live',
    category: 'web',
    context: 'personal',
    technologies: ['Nuxt 3', 'Vue', 'TypeScript', 'Tailwind CSS', 'Nuxt i18n'],
    featured: true,
    order: 1,
    links: {
      live: 'https://www.josafe.dev',
      repository: 'https://github.com/Josafe/Portfolio'
    }
  },
  {
    slug: 'agc-padel-academy',
    title: {
      ca: 'AGC Padel Academy',
      es: 'AGC Padel Academy',
      en: 'AGC Padel Academy'
    },
    description: {
      ca: "Plataforma web per a l'acadèmia amb enfocament comercial i experiència premium per alumnes i staff, amb gestió de reserves i pagaments.",
      es: 'Plataforma web para la academia con enfoque comercial y una experiencia premium para alumnos y staff, con gestión de reservas y pagos.',
      en: 'Web platform for the academy with a commercial focus and a premium experience for students and staff, including booking and payment management.'
    },
    status: 'live',
    category: 'web',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
    featured: true,
    order: 2,
    links: {
      live: 'https://agcpadelacademy.com/'
    }
  },
  {
    slug: 'ai-development-harness',
    title: {
      ca: 'AI Development Harness',
      es: 'AI Development Harness',
      en: 'AI Development Harness'
    },
    description: {
      ca: "Entorn reutilitzable de desenvolupament de software assistit per IA basat en Specification-Driven Development, amb agents especialitzats, verificació automatitzada, fluxos de treball amb Git i aprovació humana. S'integra amb Windows PowerShell i Ollama i admet models d'IA locals i al núvol.",
      es: 'Entorno reutilizable de desarrollo de software asistido por IA basado en Specification-Driven Development, con agentes especializados, verificación automatizada, flujos de trabajo con Git y aprobación humana. Se integra con Windows PowerShell y Ollama y admite modelos de IA locales y en la nube.',
      en: 'Reusable AI-assisted software development environment based on Specification-Driven Development, with specialized agents, automated verification, Git workflows and human approval. It integrates with Windows PowerShell and Ollama and supports local and cloud AI models.'
    },
    notes: {
      ca: ['En una fase inicial de desenvolupament.'],
      es: ['En una fase inicial de desarrollo.'],
      en: ['In an early stage of development.']
    },
    status: 'in-development',
    category: 'ai-systems',
    technologies: ['PowerShell', 'Ollama', 'Qwen2.5-Coder', 'DeepSeek-R1', 'Docker', 'Git'],
    featured: true,
    order: 3,
    links: {
      repository: 'https://github.com/Josafe/AI-Dev-Harness'
    }
  },
  {
    slug: 'chatbot-multiagent-system',
    title: {
      ca: 'Chatbot Multiagent System',
      es: 'Chatbot Multiagent System',
      en: 'Chatbot Multiagent System'
    },
    description: {
      ca: 'Sistema amb múltiples agents AI per a la resolució de tasques complexes i la coordinació contextual.',
      es: 'Sistema con múltiples agentes de IA para la resolución de tareas complejas y la coordinación contextual.',
      en: 'System with multiple AI agents for solving complex tasks and contextual coordination.'
    },
    notes: {
      ca: ['Treball de Fi de Màster (TFM).'],
      es: ['Trabajo de Fin de Máster (TFM).'],
      en: ["Master's thesis project (TFM)."]
    },
    category: 'ai-systems',
    context: 'academic',
    technologies: ['Python', 'LLMs', 'Agent Orchestration'],
    featured: true,
    order: 4,
    links: {
      repository: 'https://github.com/Josafe/TFM-Sistema-Chatbot-Multiagent'
    }
  },
  {
    slug: 'sme-management-pilot',
    title: {
      ca: 'SME Management Pilot',
      es: 'SME Management Pilot',
      en: 'SME Management Pilot'
    },
    description: {
      ca: 'Aplicació de gestió empresarial per a una empresa fictícia de manteniment i instal·lacions de 12 persones, desenvolupada com un monòlit modular amb Laravel 13, Filament 5 i PHP 8.3 sobre SQLite/PostgreSQL.',
      es: 'Aplicación de gestión empresarial para una empresa ficticia de mantenimiento e instalaciones de 12 personas, desarrollada como un monolito modular con Laravel 13, Filament 5 y PHP 8.3 sobre SQLite/PostgreSQL.',
      en: 'Business management application for a fictional 12-person maintenance and facilities company, built as a modular monolith with Laravel 13, Filament 5 and PHP 8.3 on SQLite/PostgreSQL.'
    },
    notes: {
      ca: [
        "L'empresa és un escenari de negoci fictici: no és un encàrrec de cap client real.",
        'El mòdul de gestió de clients està implementat; la resta de mòduls estan pendents.'
      ],
      es: [
        'La empresa es un escenario de negocio ficticio: no es un encargo de ningún cliente real.',
        'El módulo de gestión de clientes está implementado; el resto de módulos están pendientes.'
      ],
      en: [
        'The company is a fictional business scenario, not a commission from a real client.',
        'The Client Management module is implemented; the remaining modules are pending.'
      ]
    },
    status: 'in-development',
    category: 'business-software',
    context: 'personal',
    technologies: ['Laravel 13', 'Filament 5', 'PHP 8.3', 'SQLite', 'PostgreSQL'],
    featured: false,
    order: 5,
    links: {
      repository: 'https://github.com/Josafe/SME-Management-Pilot'
    }
  },
  {
    slug: 'ai-object-detection',
    title: {
      ca: 'AI Object Detection & Traffic Analysis',
      es: 'AI Object Detection & Traffic Analysis',
      en: 'AI Object Detection & Traffic Analysis'
    },
    description: {
      ca: "Projecte experimental de visió per computador que detecta i fa el seguiment d'objectes en vídeos, com ara vehicles, persones i animals, amb regions d'interès poligonals, comptadors de pas de línia, identificadors de seguiment i anotacions visuals de trajectòries.",
      es: 'Proyecto experimental de visión por computador que detecta y sigue objetos en vídeos, como vehículos, personas y animales, con regiones de interés poligonales, contadores de cruce de línea, identificadores de seguimiento y anotaciones visuales de trayectorias.',
      en: 'Experimental computer-vision project that detects and tracks objects in videos, including vehicles, people and animals, with polygon-based regions of interest, line-crossing counters, tracking IDs and visual trajectory annotations.'
    },
    notes: {
      ca: ['El repositori públic només conté una mostra parcial del codi: les dependències i els fitxers de models originals eren massa grans per pujar-los, de manera que no és una aplicació completa.'],
      es: ['El repositorio público solo contiene una muestra parcial del código: las dependencias y los archivos de modelos originales eran demasiado grandes para subirlos, por lo que no es una aplicación completa.'],
      en: ['The public repository contains only a partial code sample: the original dependencies and model files were too large to upload, so it is not a complete application.']
    },
    status: 'experimental',
    category: 'computer-vision',
    technologies: ['Python', 'Ultralytics YOLOv8', 'Supervision', 'OpenCV', 'NumPy', 'ByteTrack', 'CUDA'],
    featured: false,
    order: 6,
    links: {
      repository: 'https://github.com/Josafe/AI_Ultralytics_Supervision'
    }
  }
]
