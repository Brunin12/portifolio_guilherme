import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
export const SKILL_DATA = [
  {
    skill_name: "Google Ads",
    image: "google-ads.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Facebook Ads",
    image: "facebook-ads.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Instagram Ads",
    image: "instagram-ads.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TikTok Ads",
    image: "tiktok-ads.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "LinkedIn Ads",
    image: "linkedin-ads.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Google Analytics",
    image: "google-analytics.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Facebook Pixel",
    image: "facebook-pixel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Google Tag Manager",
    image: "google-tag-manager.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SEO",
    image: "seo.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Email Marketing",
    image: "email-marketing.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Análise de Dados",
    image: "data-analysis.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: "http://wa.me/+557581334223",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/oguilherme.vilela/",
  },
  {
    name: "Facebook",
    icon: FaThreads,
    link: "https://www.threads.com/@oguilherme.vilela",
  },
] as const;


export const PROJECTS = [
  {
    title: "Campanha de Tráfego Google Ads",
    description:
      "Projeto focado na criação e otimização de campanhas de Google Ads para maximizar conversões e ROI. Inclui segmentação precisa, análise de dados e testes A/B para garantir alta performance.",
    image: "/projects/project-1.png",
    link: "https://www.instagram.com/oguilherme.vilela/",
  },
  {
    title: "Estratégia de Remarketing Multicanal",
    description:
      "Desenvolvimento de estratégia integrada de remarketing para Facebook, Instagram e Google, aumentando a retenção de clientes e impulsionando as vendas com anúncios personalizados e automação.",
    image: "/projects/project-2.png",
    link: "https://www.instagram.com/oguilherme.vilela/",
  },
  {
    title: "Landing Page para Conversão",
    description:
      "Criação de landing page otimizada para conversão, focada em captação de leads e vendas. Design clean, copy persuasiva e integração com ferramentas de análise e CRM.",
    image: "/projects/project-3.png",
    link: "https://www.instagram.com/oguilherme.vilela/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Comunidade",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Redes Sociais",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/oguilherme.vilela/",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
      {
        name: "Twitter",
        icon: FaThreads,
        link: "https://twitter.com",
      },
    ],
  },
  {
    title: "Sobre mim",
    data: [
      {
        name: "Entre em contato",
        icon: null,
        link: "https://wa.me/+557581334223",
      },
      {
        name: "Saiba mais sobre mim",
        icon: null,
        link: "https://www.instagram.com/oguilherme.vilela/",
      },
      {
        name: "Torne-se um patrocinador",
        icon: null,
        link: "https://www.instagram.com/oguilherme.vilela/",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Sobre Mim",
    link: "#about-me",
  },
  {
    title: "Habilidades",
    link: "#skills",
  },
  {
    title: "Projetos",
    link: "#projects",
  },
] as const;
