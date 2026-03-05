import type { LucideIcon } from "lucide-react";

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface OverviewPoint {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export interface OverviewContent {
  sectionLabel: string;
  headline: string;
  description: string;
  points: OverviewPoint[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Award {
  title: string;
  description: string;
  href?: string;
}

export interface TrackRecordContent {
  sectionLabel: string;
  headline: string;
  description: string;
  stats: Stat[];
  awards: Award[];
}

export interface AboutContent {
  sectionLabel: string;
  headline: string;
  description: string;
  tagline: string;
  pillars: string[];
  highlights: string[];
  stats: Stat[];
}

export interface Channel {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  highlight?: string;
}

export interface AiCapability {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface PlatformFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface PlatformContent {
  sectionLabel: string;
  headline: string;
  description: string;
  stats: Stat[];
  channels: Channel[];
  aiCapabilities: AiCapability[];
  coreFeatures: PlatformFeature[];
  caiSuite: {
    headline: string;
    description: string;
    features: string[];
  };
}

export interface LineItem {
  item: string;
  amount: number;
  note?: string;
}

export interface InvestmentContent {
  sectionLabel: string;
  headline: string;
  description: string;
  onceOff: {
    items: LineItem[];
    total: number;
  };
  monthly: {
    perLicense: number;
    licenseCount: number;
    total: number;
    note: string;
  };
}

export interface TermsSection {
  title: string;
  content: string;
}

export interface TermsContent {
  sectionLabel: string;
  headline: string;
  sections: TermsSection[];
}

export interface AcceptanceContent {
  headline: string;
  description: string;
  ctaLabel: string;
}

export interface NavItem {
  label: string;
  href: string;
}
