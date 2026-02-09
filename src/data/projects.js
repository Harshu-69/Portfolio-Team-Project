import CodePaste from "../assets/images/CodePaste.jpg";
import AiSeoLanding from "../assets/images/AiSeoLanding.jpg";
import digitalAgency from "../assets/images/digitalAgency.jpg";
import githubRepo from "../assets/images/githubRepo.jpg";
import BallonGame from "../assets/images/BallonGame.jpg";
import burgerking from "../assets/images/burgerking.jpg";

export const projects = [
  {
    id: 1,
    type: "DEVELOPER PRODUCTIVITY TOOL",
    title: "CodePaste – Code Snippet Manager",
    desc: "A full-featured code snippet manager with authentication and CRUD functionality.",
    tech: ["React", "Vite", "Tailwind CSS", "Appwrite", "Monaco Editor"],
    image: CodePaste,
  },
  {
    id: 2,
    type: "ANIMATED MARKETING WEBSITE",
    title: "AI SEO Landing Page",
    desc: "A modern AI-themed landing page featuring smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: AiSeoLanding,
  },
  {
    id: 3,
    type: "BUSINESS PORTFOLIO SITE",
    title: "Digital Agency Website",
    desc: "A clean and responsive digital agency website.",
    tech: ["React", "Tailwind CSS"],
    image: digitalAgency,
  },
  {
    id: 4,
    type: "PERSONAL PROJECT",
    title: "Portfolio v2",
    desc: "Second version of my developer portfolio.",
    tech: ["React", "Tailwind CSS"],
    image: githubRepo,
  },
  {
    id: 5,
    type: "UI EXPERIMENT",
    title: "Animated Dashboard",
    desc: "Dashboard UI with charts and transitions.",
    tech: ["React", "Framer Motion"],
    image: BallonGame,
  },
  {
    id: 6,
    type: "WEB APP",
    title: "Task Manager",
    desc: "Task management app with filters.",
    tech: ["React", "Tailwind CSS"],
    image: BallonGame,
  },
  {
    id: 7,
    type: "WEB APP",
    title: "Task Manager",
    desc: "Task management app with filters.",
    tech: ["React", "Tailwind CSS"],
    image: burgerking,
  },
];
