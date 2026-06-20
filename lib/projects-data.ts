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
    title: "Logistic Regression on Social Network Ads",
    description:
      "Binary classification project predicting Purchased vs Not Purchased outcomes using a NumPy implementation and scikit-learn baselines.",
    longDescription:
      "A machine learning classification project built around the Social Network Ads dataset. It compares Logistic Regression implemented from scratch with NumPy against scikit-learn baselines, including linear and polynomial feature setups. The work covers data preparation, model training, binary classification, decision-boundary visualization, and practical evaluation of Purchased vs Not Purchased predictions.",
    image: "/logistic-regression-social-ads.svg",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "scikit-learn"],
    liveUrl: "https://www.kaggle.com/code/bexzodaxmadjonov/logistic-regression-project-clean",
    githubUrl: "https://github.com/bekhzodakhmadjonov/logistic_regression",
    featured: true,
    status: "Notebook",
    year: "2026",
    team: "Solo Project",
    duration: "1 week",
    stats: {
      stars: 0,
      forks: 0,
      commits: 1,
    },
  },
  {
    id: 2,
    title: "Multiple Linear Regression for Sales Prediction",
    description:
      "Regression project predicting sales from advertising budget features, with data analysis, model training, and prediction visualization.",
    longDescription:
      "A supervised learning project focused on multiple linear regression for sales prediction. The notebook explores advertising budget data, prepares feature inputs, trains a regression model, and visualizes how predicted values compare with real sales outcomes. It highlights core machine learning workflow skills: exploratory analysis, numerical computing, model fitting, and clear Matplotlib-based interpretation.",
    image: "/linear-regression-multiple-features.svg",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
    liveUrl: "https://www.kaggle.com/code/bexzodaxmadjonov/linear-regression-with-multiple-features",
    githubUrl: "https://github.com/bekhzodakhmadjonov/linear_regression_multiple",
    featured: true,
    status: "Notebook",
    year: "2026",
    team: "Solo Project",
    duration: "1 week",
    stats: {
      stars: 0,
      forks: 0,
      commits: 1,
    },
  },
  {
    id: 3,
    title: "Data Cleaning on Car Pricing Prediction Dataset",
    description:
      "Data preparation project focused on cleaning a car pricing dataset before modeling, with missing-value handling, formatting, and EDA.",
    longDescription:
      "A practical data-cleaning notebook built around a car pricing prediction dataset. The project prepares raw automotive data for later machine learning work by inspecting columns, handling missing or inconsistent values, cleaning feature formats, and using exploratory visualizations to understand pricing patterns. It focuses on the essential preprocessing work that makes a prediction model more reliable.",
    image: "/car-pricing-data-cleaning.svg",
    technologies: ["Python", "Pandas", "Matplotlib"],
    liveUrl: "https://www.kaggle.com/code/bexzodaxmadjonov/data-cleaning-car-pricing-prediction-dataset",
    githubUrl: "https://github.com/bekhzodakhmadjonov/data_cleaning_on_car_dataset",
    featured: true,
    status: "Notebook",
    year: "2026",
    team: "Solo Project",
    duration: "1 week",
    stats: {
      stars: 0,
      forks: 0,
      commits: 1,
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
