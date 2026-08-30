"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const sectionLinks = [
  { id: "current-role", label: "Current Role" },
  { id: "selected-work", label: "Website Work" },
  { id: "landing-pages", label: "Landing Pages" },
  { id: "products", label: "Products" },
  { id: "skills", label: "Skills" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      setActiveSection(null);
      return;
    }

    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;
      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 80;
      const activationPoint = headerHeight + 24;
      let nextSection: string | null = null;

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activationPoint) {
          nextSection = section.id;
        }
      });

      const pageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (pageBottom) {
        nextSection = sections[sections.length - 1].id;
      }

      setActiveSection(nextSection);
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [pathname]);

  const navigation = sectionLinks.map(({ id, label }) => {
    const isActive = activeSection === id;

    return (
      <Link
        key={id}
        href={`/#${id}`}
        onClick={() => setActiveSection(id)}
        aria-current={isActive ? "location" : undefined}
        className={`whitespace-nowrap rounded-full px-3 py-1.5 text-small transition-all duration-200 ${
          isActive
            ? "bg-ink text-paper shadow-sm"
            : "text-muted hover:bg-hairline hover:text-ink"
        }`}
      >
        {label}
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/80 backdrop-blur-sm border-b border-hairline">
      <div className="mx-auto max-w-case-study flex items-center justify-between px-6 md:px-container-pad py-3 md:py-4">
        <Link
          href="/"
          className="font-display text-[20px] font-medium text-ink hover:text-accent transition-colors duration-150"
        >
          Logan Parke
        </Link>
        <nav
          aria-label="Portfolio sections"
          className="hidden items-center gap-1 rounded-full border border-hairline bg-paper p-1 shadow-sm md:flex"
        >
          {navigation}
        </nav>
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="p-2 text-ink hover:text-accent transition-colors duration-200"
        >
          {theme === "light" ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </div>
      <div className="mx-auto max-w-case-study px-6 pb-3 md:hidden">
        <nav
          aria-label="Portfolio sections"
          className="flex gap-1 overflow-x-auto rounded-full border border-hairline bg-paper p-1 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navigation}
        </nav>
      </div>
    </header>
  );
}
