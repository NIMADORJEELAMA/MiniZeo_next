import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "What we do", href: "#features" },
  { label: "Who we are", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export const testimonials = [
  {
    user: "Steven Clark",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at Minizeo was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. ",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];
export const topPerformers = [
  {
    id: 1,
    name: "MD Mudassir Ansari",
    role: "Frontend Developer",
    college: "MAKAUT",
    image: "/assets/profile-pictures/Mudassir.jpeg",
    certificate: "/assets/certificate_10.png",
    work: [
      "Built responsive landing page using React & Tailwind",
      "Implemented Price section with dynamic data",
      "Optimized page load performance by 30%",
    ],
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Backend Developer",
    college: "Techno India",
    image: "/assets/profile-pictures/user7.png",
    certificate: "/assets/mudassir-cert.pdf",

    work: [
      "Designed REST APIs for student management",
      "Integrated JWT-based authentication",
      "Improved API response time by 40%",
    ],
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    name: "Ayesha Sharma",
    role: "UI/UX Designer",
    college: "Amity University",
    image: "/assets/profile-pictures/user8.png",
    certificate: "/assets/mudassir-cert.pdf",

    work: [
      "Redesigned dashboard UI for better UX",
      "Created reusable design system",
      "Improved user engagement by 25%",
    ],
    tech: ["Figma", "Adobe XD", "UX Research"],
  },
  {
    id: 10,
    name: "Vishakha Bharti",
    role: "Frontend Developer",
    college: "Oriental Institute of Science and Technology",
    image: "/assets/profile-pictures/userGirl.jpg",
    certificate: "/assets/Certificate_10.png",
    work: [
      "Developed a seamless 'Add to Cart' system with real-time UI updates",
      "Managed global cart state using React Context API for data consistency",
      "Integrated persistent local storage to retain cart items after page refresh",
    ],
    tech: ["React", "Tailwind", "JavaScript"],
  },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
