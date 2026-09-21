import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import OrangeSignal from "../interactions/OrangeSignal";
import MagneticButton from "../interactions/MagneticButton";

export default function Footer() {
  return (
    <footer className="bg-nb-black text-nb-off-white relative border-t border-white/10 overflow-hidden">
      {/* Subtle top signal line */}
      <OrangeSignal variant="line" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Logo variant="white" />
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-nb-white tracking-tight max-w-sm">
              Where Ideas Find Their Code.
            </p>
            <p className="text-sm text-nb-muted leading-relaxed max-w-md">
              NithByte designs and engineers digital experiences, commerce platforms, and intelligent software systems for forward-thinking international businesses.
            </p>
            <div className="pt-2">
              <MagneticButton href="/contact" variant="primary" size="sm" cursorLabel="LET'S BUILD">
                Start a Project
              </MagneticButton>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm font-mono-tech">
            {/* Column 1: Company */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-nb-orange font-semibold">
                Company
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    Work & Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-nb-off-white/80 hover:text-nb-orange transition-colors flex items-center gap-1.5">
                    Careers <span className="text-[10px] text-nb-orange bg-nb-orange/10 px-1.5 py-0.5 rounded">Hiring</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    Contact & Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Capabilities */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-nb-orange font-semibold">
                Capabilities
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/services/web-development" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-apps" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link href="/services/e-commerce" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-automation" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Explore & Legal */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-nb-orange font-semibold">
                Explore
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/labs" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    NithByte Labs
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    Insights & Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-nb-off-white/80 hover:text-nb-orange transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-nb-muted">
          <div className="flex items-center gap-3">
            <OrangeSignal variant="pulse" label="SYSTEM ACTIVE" />
            <span>•</span>
            <a href="mailto:nithbyte@gmail.com" className="hover:text-nb-orange transition-colors">
              nithbyte@gmail.com
            </a>
          </div>

          <div>
            © {new Date().getFullYear()} NithByte. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
