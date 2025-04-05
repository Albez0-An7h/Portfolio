export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    hostedUrl?: string; // Optional since not all projects might be hosted
    image?: string; // Optional image to display
}

export const projects: Project[] = [
    {
        id: "devos",
        title: "DevOS Terminal Portfolio",
        description: "Designed and developed a personal portfolio to highlight projects, skills, and achievements in a minimal yet modern interface.",
        tags: ["React", "TypeScript", "ThreeJS", "Framer Motion", "Tailwind"],
        githubUrl: "https://github.com/username/devos",
        hostedUrl: "https://devos-portfolio.example.com",
        image: "/images/DevOs.png"
    },
    {
        id: "HabitOverflow",
        title: "Habit Overflow",
        description: "Built an Habit Builder app that helps build habit using the principal of habit stacking. It is made using React + TS and supabase for backend and authentication.",
        tags: ["React", "SupaBase","TailwindCSS", "Typescript"],
        githubUrl: "https://github.com/Albez0-An7h/HabitOverflow",
        hostedUrl: "https://habit-overflow.vercel.app/",
        image: "/images/HabitOverflow.png"

    },
    {
        id: "GitTales",
        title: "GitTales",
        description: "I made this website to help my teacher keep track of GitHub activity done by the students of Newton School of Technology. This project is made in React.js with the use of the GitHub API.",
        tags: ["React", "JavaScript", "Supabase","Tailwind"],
        githubUrl: "https://github.com/Albez0-An7h/GitTales",
        hostedUrl: "git-tales.vercel.app",
        image: "/images/GitTales.png"

    },
    {
        id: "Apple Website Clone",
        title: "Apple Website Clone",
        description: "This is a clone of the Apple website built using React.js. It replicates the design and layout of Apple’s oﬃcial site, helping me practice React components, state management, and responsive UI development.",
        tags: ["React", "JavaScript", "Tailwind"],
        githubUrl: "https://github.com/Albez0-An7h/apple-clone",
        hostedUrl: "apple-clone-omega-lovat.vercel.app",
        image: "/images/AppleClone.png"

    },
    {
        id: "Smart Planner",
        title: "Smart Planner",
        description: "SmartPlanner is an intelligent task management application that leverages AI to optimize your schedule. Unlike traditional to-do apps, SmartPlanner analyzes your tasks and automatically generates an optimized daily schedule that maximizes productivity while maintaining balance. Simply add your tasks, let the AI generate an optimal schedule, and with one click, add it directly to your Google Calendar.",
        tags: ["React", "JavaScript", "Supabase","Typescript","Tailwind"],
        githubUrl: "https://github.com/Albez0-An7h/SmartPlanner",
        hostedUrl: "smart-planner-albez0-an7h.vercel.app",
        image: "/images/SmartPlanner.png"
    },
    
];
