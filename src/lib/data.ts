import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import currentPortfolioImg from "public/currentPortfolio.png";
import practiceMeImg from "public/practiceMe.png";
import codeHubImg from "public/codehub.png";
import attendanceGrabberImg from "public/attendanceGrabber.png";
import oldPortfolioImg from "public/oldPortfolio.png";
import rmtdevImg from "public/rmtdev.png";
import wordanalyticsImg from "public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Secondary School Education (O Levels)",
        location: "Chua Chu Kang Secondary School",
        description:
            "Graduated from secondary school  with a L1R4 of 13 points. I partook in Badminton CCA and was a member of the school's Infocomm Club.",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
    {
        title: "Diploma in Information Technology",
        location: "Singapore Polytechnic",
        description:
            "I'm currently pursuing a diploma in Information Technology at Singapore Polytechnic. I've learned about web development, mobile development, security and more. I'm currently in my second year of studies.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - 2025",
    },
    {
        title: "Personal Developer",
        location: "Singapore",
        description:
            "I've been developing websites and web apps since 2021. I've worked on projects such as my personal portfolio, PracticeMe and more. I seek to improve my skills and learn new technologies everyday.",
        icon: React.createElement(FaReact),
        date: "2022 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Personal Portfolio",
        description:
            "My current portfolio website. Built with Next.js 13, TypeScript, Tailwind, Framer Motion and Three.js.",
        date: "22 August 2023",
        tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Three.js"],
        imageUrl: currentPortfolioImg,
        websiteUrl: "#",
    },
    {
        title: "PracticeMe",
        description:
            "A realtime, gamified web app used by students in Singapore Polytechnic to practice their Javascript skills.",
        date: "17 April 2023",
        tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "tRPC"],
        imageUrl: practiceMeImg,
        websiteUrl: "https://socpracticeme.vercel.app",
    },
    {
        title: "CodeHub",
        description:
            "An online Code Editor that allows users to write and run code in the browser. Built with Pocketbase, React and DaisyUI.",
        date: "15 February 2023",
        tags: ["React", "Pocketbase", "DaisyUI"],
        imageUrl: codeHubImg,
        websiteUrl: "https://codehub.travisleow.works",
    },
    {
        title: "Attendance Scraper",
        description:
            "A web scraper that scrapes attendance data from Singapore Polytechnic using Puppeteer. Built with React, Express.js and DaisyUI.",
        date: "30 November 2022",
        tags: ["React", "Express.js", "Puppeteer", "DaisyUI"],
        imageUrl: attendanceGrabberImg,
        websiteUrl: "https://attendance.travisleow.works",
    },
    {
        title: "Bootstrap Portfolio",
        description:
            "First portfolio website made using Bootstrap. It was here that I learned the basics of HTML, CSS and JavaScript.",
        date: "7 August 2022",
        tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
        imageUrl: oldPortfolioImg,
        websiteUrl: "https://bootstrap.travisleow.works",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Bootstrap",
    "Tailwind",
    "Pocketbase",
    "MySQL",
    "MongoDB",
    "Express.js",
    "Puppeteer",
    "Framer Motion",
    "Three.js",
] as const;
