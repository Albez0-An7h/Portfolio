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
        description: "An interactive terminal-based portfolio experience with simulated OS.",
        tags: ["React", "TypeScript", "ThreeJS", "Framer Motion"],
        githubUrl: "https://github.com/username/devos",
        hostedUrl: "https://devos-portfolio.example.com",
        image: "/projects/devos.png"
    },
    {
        id: "HabitOverflow",
        title: "Habit Overflow",
        description: "A cutting-edge web application with modern features and sleek design.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        githubUrl: "https://github.com/Albez0-An7h/HabitOverflow",
        hostedUrl: "habit-overflow.vercel.app"
    },
    {
        id: "project-beta",
        title: "Project Beta",
        description: "Mobile experience built with React Native demonstrating cross-platform capabilities.",
        tags: ["React Native", "JavaScript", "Firebase"],
        githubUrl: "https://github.com/username/project-beta"
    },
    // You can add more projects here
];
