import { portfolioData } from "@/data/portfolio";
import type { CaseStudy } from "@/lib/types";

export const getPortfolioData = () => portfolioData;

export const getSiteConfig = () => portfolioData.site.config;
export const getNavItems = () => portfolioData.site.navItems;
export const getSocialLinks = () => portfolioData.site.socialLinks;

export const getHomePageContent = () => portfolioData.pages.home;
export const getAboutPageContent = () => portfolioData.pages.about;
export const getWorkPageContent = () => portfolioData.pages.work;
export const getProjectsPageContent = () => portfolioData.pages.projects;
export const getLabsPageContent = () => portfolioData.pages.labs;
export const getContactPageContent = () => portfolioData.pages.contact;
export const getChatPageContent = () => portfolioData.pages.chat;

export const getCaseStudies = () => portfolioData.pages.work.items;
export const getProjects = () => portfolioData.pages.projects.items;
export const getLabs = () => portfolioData.pages.labs.items;
export const getTimeline = () => portfolioData.pages.about.timeline.items;
export const getStack = () => portfolioData.pages.about.stack.items;

export const getCreativeCategories = () => portfolioData.pages.home.creative.categories;
export const getCreativeItems = () => portfolioData.pages.home.creative.items;

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  portfolioData.pages.work.items.find((study) => study.slug === slug);

export const getCaseStudyParams = () =>
  portfolioData.pages.work.items.map((study) => ({ slug: study.slug }));
