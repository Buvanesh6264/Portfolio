import { FaJava, FaMobileAlt } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPostman,
  SiGithub,
} from "react-icons/si";

export const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

export const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#e34f26", category: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572b6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "Frontend" },
  { name: "React", icon: SiReact, color: "#61dafb", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#a1a1aa", category: "Frontend" },
  { name: "React Native", icon: FaMobileAlt, color: "#38bdf8", category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#9ca3af", category: "Backend" },
  { name: "Java", icon: FaJava, color: "#f89820", category: "Backend" },
  { name: "API Integration", icon: SiPostman, color: "#ff6c37", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", category: "Database" },
  { name: "Redis", icon: SiRedis, color: "#dc382d", category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1", category: "Database" },
  { name: "GitHub", icon: SiGithub, color: "#a78bfa", category: "Tools" },
];
