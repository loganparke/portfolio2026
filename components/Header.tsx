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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

  const desktopNavigation = sectionLinks.map(({ id, label }) => {
    const isActive = activeSection === id;

    return (
      <Link
        key={id}
        href={`/#${id}`}
        onClick={() => setActiveSection(id)}
        aria-current={isActive ? "location" : undefined}
        className={`flex-none whitespace-nowrap rounded-full px-3 py-1.5 text-small transition-all duration-200 ${
          isActive
            ? "bg-ink text-paper shadow-sm"
            : "text-muted hover:bg-hairline hover:text-ink"
        }`}
      >
        {label}
      </Link>
    );
  });

  const mobileNavigation = sectionLinks.map(({ id, label }, index) => {
    const isActive = activeSection === id;

    return (
      <Link
        key={id}
        href={`/#${id}`}
        onClick={() => {
          setActiveSection(id);
          setIsMenuOpen(false);
        }}
        aria-current={isActive ? "location" : undefined}
        className={`group flex items-center justify-between border-b border-hairline py-3.5 text-[16px] leading-none transition-colors last:border-b-0 ${
          isActive ? "text-ink" : "text-muted hover:text-ink"
        }`}
      >
        <span>{label}</span>
        <span
          aria-hidden="true"
          className={`font-mono text-[11px] transition-colors ${
            isActive
              ? "text-accent"
              : "text-muted opacity-60 group-hover:text-accent group-hover:opacity-100"
          }`}
        >
          0{index + 1}
        </span>
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-case-study items-center justify-between px-6 py-3 md:px-container-pad md:py-4">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="font-display text-[20px] font-medium text-ink transition-colors duration-150 hover:text-accent"
        >
          Logan Parke
        </Link>
        <nav
          aria-label="Portfolio sections"
          className="hidden items-center gap-1 rounded-full border border-hairline bg-paper p-1 shadow-sm md:flex"
        >
          {desktopNavigation}
        </nav>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="flex size-10 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-hairline hover:text-accent"
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
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-hairline hover:text-accent md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              {isMenuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M5 8h14" />
                  <path d="M5 16h14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full border-b border-hairline bg-paper/95 shadow-[0_16px_32px_rgba(26,40,32,0.08)] backdrop-blur-md transition-[opacity,transform,visibility] duration-200 md:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav
          aria-label="Portfolio sections"
          className="mx-auto max-w-case-study px-6 py-2"
        >
          {mobileNavigation}
        </nav>
      </div>
    </header>
  );
}
