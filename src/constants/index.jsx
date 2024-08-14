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
  { label: "Início", href: "inicio" },
  { label: "Ferramentas", href: "ferramentas" },
  { label: "Sobre", href: "sobre" },
  { label: "Contato", href: "contato" },
];

export const testimonials = [
  {
    user: "John Doe",
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
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
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
    text: "CRM & ERP",
    description:
      "Gerenciamos seus dados com uma interface amigável e intuitiva. Contamos com dezenas de funções",
  },
  {
    icon: <Fingerprint />,
    text: "Soluções em Laravel",
    description:
      "Desenvolvemos aplicações Laravel com eficiência e praticidade. Atendendo os requisitos do seu projeto.",
  },
  {
    icon: <ShieldHalf />,
    text: "WordPress",
    description:
      "Criamos sites WordPress modernos e otimizados facilmente. Utilizando ferramentas como Elementor e WPBakery.",
  },
  {
    icon: <BatteryCharging />,
    text: "SAP",
    description:
      "Implementamos soluções SAP para otimizar seus processos empresariais.",
  },
  {
    icon: <PlugZap />,
    text: "Aplicações Mobile",
    description:
      "Desenvolvemos apps móveis funcionais e atrativos para seus usuários. Utilizando React Native e Flutter.",
  },
  {
    icon: <GlobeLock />,
    text: "Landing Pages",
    description:
      "Desenvolvemos landing pages eficazes para captar mais clientes e ter sucesso na venda do seu produto.",
  },
];

export const checklistItems = [
  {
    title: "Atualizações semanais",
    description:
      "Acompanhe a evolução do seu produto de forma transparente e ágil.",
  },
  {
    title: "Revisões pré-publicação",
    description:
      "As publicações são feitas de forma segura e sem margem para erros.",
  },
  {
    title: "Contato direto com o desenvolvedor",
    description:
      "Esteja por dentro do que está acontecendo por baixo dos panos.",
  },
  {
    title: "Demandas de emergência",
    description:
      "Horas reservadas para atender demandas urgentes e imprevistos.",
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
