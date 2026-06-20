import type { LucideIcon } from "lucide-react"

export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  status: string
  year: string
  team: string
  duration?: string
  stats: {
    stars: number
    forks: number
    commits: number
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AgroAI",
    description:
      "An AI assistant for Agrobank users that helps answer agriculture and finance-related questions through a simple conversational interface.",
    longDescription:
      "AgroAI is an AI-powered assistant built for Agrobank-style agricultural support. It helps users ask natural-language questions, receive clear guidance, and interact with complex information through a lightweight chat experience. The project focuses on practical AI product design: prompt engineering, domain-focused responses, conversational UX, and turning model capabilities into a useful assistant for farmers, customers, and agriculture-focused workflows.",
    image: "https://www.almawave.com/wp-content/uploads/2024/10/BLOG-CONVERSATION-STUDIO-3.webp",
    technologies: ["React", "AI Chatbot", "Prompt Engineering", "LLM API", "Conversational UX", "Netlify"],
    liveUrl: "https://agroaiuz.netlify.app/",
    githubUrl: "https://github.com/bekhzodakhmadjonov/agroai_v2",
    featured: true,
    status: "Live",
    year: "2024",
    team: "Solo Project",
    duration: "3 months",
    stats: {
      stars: 124,
      forks: 32,
      commits: 156,
    },
  },
  {
    id: 2,
    title: "Tech House",
    description:
      "A technology education platform built to present courses, learning paths, and digital training experiences through a clean web interface.",
    longDescription:
      "Tech House is a web platform for technology-focused education, designed to help learners discover courses, understand learning opportunities, and connect with a modern training experience. From an AI/ML engineering perspective, it creates the product foundation for intelligent education workflows such as personalized course discovery, learner analytics, content recommendations, and AI-assisted guidance.",
    image: "https://ideas.darden.virginia.edu/sites/default/files/2024-08/5x3%20AI%20companion.jpg",
    technologies: ["React", "JavaScript", "Education Platform", "Recommendation UX", "Learner Analytics", "Netlify"],
    liveUrl: "https://tech-house-x.netlify.app/",
    githubUrl: "https://github.com/bekhzodakhmadjonov/tech-house",
    featured: true,
    status: "Live",
    year: "2023",
    team: "2 Developers",
    duration: "4 months",
    stats: {
      stars: 89,
      forks: 23,
      commits: 203,
    },
  },
  {
    id: 3,
    title: "AI-Enhanced 3D Portfolio",
    description:
      "An interactive portfolio experience that combines 3D visuals with AI-focused storytelling, project presentation, and immersive technical branding.",
    longDescription:
      "An immersive portfolio built to present technical work as an interactive experience. The project combines React Three Fiber, Three.js, and Next.js with AI-oriented positioning, project storytelling, and smooth motion design. It shows how engineering, product thinking, and creative presentation can work together when building a memorable personal brand around intelligent systems.",
    image: "https://vanschneider.com/blog/content/images/wp-content/uploads/2018/08/nuria_portfolio.jpg",
    technologies: ["Next.js", "Three.js", "React Three Fiber", "TypeScript", "Framer Motion", "Vercel"],
    liveUrl: "https://bexzodaxmadjonov.vercel.app/",
    githubUrl: "https://github.com/bexzodaxmadjonov/3d_portfolio",
    featured: true,
    status: "Live",
    year: "2023",
    team: "Solo Project",
    duration: "2 months",
    stats: {
      stars: 67,
      forks: 18,
      commits: 98,
    },
  },
  {
    id: 4,
    title: "Student Performance Analytics",
    description:
      "A data analytics dashboard for tracking learning progress, engagement patterns, and performance signals across an education platform.",
    longDescription:
      "An analytics platform for education teams to understand student activity, course progress, and performance trends. The dashboard focuses on clean data presentation, useful metrics, and decision support for instructors. It demonstrates the data side of AI/ML work: collecting signals, structuring them into meaningful features, and presenting insights that can support personalized learning experiences.",
    image: "https://www.esparklearning.com/app/uploads/2023/10/Student_Computers.jpg",
    technologies: ["Python", "Pandas", "React", "D3.js", "PostgreSQL", "Django", "Docker"],
    liveUrl: "https://udacademy.netlify.app/",
    githubUrl: "https://github.com/bexzodaxmadjonov/udacademy",
    featured: false,
    status: "Live",
    year: "2023",
    team: "3 Developers",
    duration: "5 months",
    stats: {
      stars: 156,
      forks: 41,
      commits: 287,
    },
  },
  {
    id: 5,
    title: "Video Recommendation Platform",
    description:
      "A video platform prototype with upload, streaming, search, and engagement features that can support recommendation and personalization experiments.",
    longDescription:
      "A video-sharing platform prototype designed around the core systems behind modern content products: search, user behavior, video metadata, comments, likes, and subscriptions. Beyond the product interface, the project creates a foundation for recommendation experiments by capturing interaction signals and organizing content data in a way that can power ranking, personalization, and discovery workflows.",
    image: "https://www.figma.com/community/resource/e2d59ad1-4ee3-4de0-bd50-f03a873c6567/thumbnail",
    technologies: ["Next.js", "Supabase", "TypeScript", "Search", "Recommendation Systems", "Tailwind CSS"],
    liveUrl: "https://youtube-cloun.netlify.app/",
    githubUrl: "https://github.com/bexzodaxmadjonov/youtube-clone",
    featured: false,
    status: "Live",
    year: "2022",
    team: "Solo Project",
    duration: "3 months",
    stats: {
      stars: 43,
      forks: 12,
      commits: 134,
    },
  },
  {
    id: 6,
    title: "RL Game Environment",
    description:
      "A fast-paced 3D arcade game environment that can be used to explore scoring logic, agent behavior, and reinforcement-learning style experiments.",
    longDescription:
    "Blocks Ninja is a 3D arcade environment built around fast decisions, obstacle patterns, scoring, and feedback loops. The game mechanics create a useful foundation for experimenting with agent behavior, reward design, and reinforcement-learning-style simulations while still being playable as a polished browser game. It connects interactive engineering with AI concepts like state, action, reward, and adaptive difficulty.",
    image: "https://m.media-amazon.com/images/I/71eY4WgWAML.png",
    technologies: ["React", "Three.js", "Game Logic", "Simulation", "Reward Design", "Netlify"],
    liveUrl: "https://xonobodgame.netlify.app/",
    githubUrl: "https://github.com/bexzodaxmadjonov/blocks-ninja",
    featured: false,
    status: "Live",
    year: "2022",
    team: "Solo Project",
    duration: "2 months",
    stats: {
      stars: 78,
      forks: 25,
      commits: 112,
    },
  },
]

export interface Experience {
  id: number
  yearRange: string
  title: string
  company: string
  companyUrl: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    yearRange: "JUN 2026 - PRESENT",
    title: "ML/Data Science Student",
    company: "Najot Ta'lim",
    companyUrl: "https://najottalim.uz/",
    description:
      "Studying machine learning and data science with a focus on practical AI workflows, data analysis, model-building fundamentals, and applied problem-solving.",
    technologies: ["Machine Learning", "Data Science", "Python", "Data Analysis", "AI Fundamentals"],
  },
  {
    id: 2,
    yearRange: "2024 - 2025",
    title: "Middle Software Engineer",
    company: "Freelance | Self-Employed",
    companyUrl: "https://www.upwork.com/",
    description:
      "Led development of scalable web applications serving 2M+ users. Architected and implemented microservices infrastructure, mentored junior developers, and collaborated with product teams to deliver high-impact features that drove business growth.",
    technologies: ["React.js", "TypeScript", "Node.js", "Microservices", "AWS", "PostgreSQL"],
  },
  {
    id: 3,
    yearRange: "2023 - 2024",
    title: "Junior Full-Stack Developer",
    company: "UDA Academy",
    companyUrl: "https://udacademy.netlify.app/",
    description:
      "Built responsive web applications from the ground up using modern JavaScript frameworks. Collaborated closely with designers to implement pixel-perfect UIs and worked with backend teams to integrate RESTful APIs and GraphQL endpoints.",
    technologies: ["Vue.js", "JavaScript", "REST APIs", "GraphQL", "Firebase", "Tailwind CSS"],
  },
  {
    id: 4,
    yearRange: "2022 - 2023",
    title: "Support Teacher – IT Class",
    company: "PIIMA",
    companyUrl: "https://piima.uz/en",
    description:
      "Helped lead hands-on labs, debug code, and assist students in building small projects. Coordinated school tech events and algorithm clubs while supporting learners through practical programming exercises.",
    technologies: ["React.js", "JavaScript", "Teaching", "Algorithms", "Debugging", "Web Fundamentals"],
  },
]
