import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vasudev Ammilineni",
  initials: "ASV",
  url: "https://yourportfolio.com",
  location: "Vijayawada, India",
  locationLink: "https://www.google.com/maps/place/Vijayawada",
  description:
    "BTech student at KL University, passionate about Web Development and AI.",
  summary:
    "I am currently pursuing a BTech in Computer Science at KL University, expected to graduate in 2027. Enthusiastic about AI and full-stack development, I have experience with Python, Django, and React.",
  avatarUrl: "/me.jpg",

  skills: [
    "Basic Python",
    "Django",
    "Java",
    "SpringBoot",
    "React",
    "PostgreSQL",
    "C",
    "Html",
    "Css",
    "Basic DSA"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "ammilinenivasudev@gmail.com",
    tel: "+91 7382279790",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ASVASUDEV31606",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/as-vasudev/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ASVasudev9999",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/@AmmilineniVasudev",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },

  education: [
    {
      school: "KL University",
      degree: "BTech in Computer Science Engineering",
      logoUrl: "/klu.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Narayana Junior College",
      degree: "Intermediate (11th-12th)",
      logoUrl: "/narayana.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Bhashyam High School",
      degree: "Secondary Education (10th)",
      logoUrl: "/bhashyam.png",
      start: "2020",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Online Food Delivery Platform",
      // href: "https://ps6project.com",
      dates: "Jan 2024 - ",
      // active: true,
      description:
        "A food delivery platform on the web unites users and local restaurants and enables them to view menus, order, and have food delivered to their homes. It facilitates ordering, payment, and delivery tracking to deliver a hassle-free customer experience.",
      technologies: [
        "Django",
        "Html",
        "Css",
        "SQLite"
      ],
      image: "/fooddeliveryPlatform.webp",
      video: "",
    },
    {
      title: "Online Video Streaming Platform",
      // href: "https://aichatbot.com",
      dates: "feb 2024",
      active: true,
      description:
        "Present I am  working on it and An online video streaming service enables users to stream, upload, and share videos effortlessly on the internet. It offers on-demand and live streaming with user authentication, content management, and adaptive streaming for seamless viewing.",
      technologies: [
        "Html",
        "Css",
        "React JS",
        "SpringBoot",
        "MYSql",
      ],
      image: "/onlinevideo.jpg",
      video: "",
    },
  ],

  hackathons: [],
} as const;
