import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cxg-customer-experience-group-dsg/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/cxgsa",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const contactDetails = [
  { icon: Phone, text: "+27 11 759 7000", href: "tel:+27117597000" },
  { icon: Phone, text: "0861 374 374", href: "tel:0861374374" },
  { icon: Mail, text: "support@cxg.co.za", href: "mailto:support@cxg.co.za" },
];

const offices = [
  "15 6th Street, Parkhurst, Johannesburg",
  "14 Edison Way, Century City, Cape Town",
];

const quickLinks = [
  { label: "Overview", href: "#overview" },
  { label: "About CXG", href: "#about" },
  { label: "Track Record", href: "#track-record" },
  { label: "Platform", href: "#platform" },
  { label: "Terms", href: "#terms" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground px-6 py-12 text-background/80">
      <div className="mx-auto max-w-5xl">
        {/* Main footer grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div className="space-y-4">
            <p className="text-lg font-bold tracking-tight text-background">
              <span className="text-primary">CXG</span> Integrated CX
            </p>
            <p className="text-sm leading-relaxed text-background/60">
              A leading South African on-demand integrated customer experience
              provider serving 100+ premier and corporate brands.
            </p>
            <p className="text-xs font-medium italic text-primary">
              #DoingSomethingGreat
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-8 items-center justify-center rounded-md bg-background/10 text-background/60 transition-colors hover:bg-primary hover:text-background"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Proposal
            </p>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-background/60 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Contact
            </p>
            <div className="space-y-2.5">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <a
                    key={detail.text}
                    href={detail.href}
                    className="flex items-center gap-2.5 text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    <Icon className="size-3.5 shrink-0" />
                    {detail.text}
                  </a>
                );
              })}
            </div>

            <div className="space-y-1.5 pt-2">
              {offices.map((office) => (
                <div
                  key={office}
                  className="flex items-start gap-2.5 text-xs text-background/40"
                >
                  <MapPin className="mt-0.5 size-3 shrink-0" />
                  {office}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 text-center text-xs text-background/40 md:flex-row md:justify-between md:text-left">
          <p>
            &copy; {new Date().getFullYear()} CXG Integrated CX. All rights
            reserved.
          </p>
          <p>25 February 2026 &middot; Confidential</p>
          <a
            href="https://www.cxg.co.za"
            className="text-background/40 transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cxg.co.za
          </a>
        </div>
      </div>
    </footer>
  );
}
