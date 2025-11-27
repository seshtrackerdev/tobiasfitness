import { useState, useEffect } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on scroll (only on significant user scroll)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    let scrollTimeout: NodeJS.Timeout;
    let scrollHandler: (() => void) | null = null;
    let menuOpenScrollY = window.scrollY;

    // Wait a bit before activating scroll listener to avoid immediate closure
    const activationTimeout = setTimeout(() => {
      scrollHandler = () => {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - menuOpenScrollY);
        
        // Only close on significant scroll (more than 50px) to avoid accidental closes
        if (scrollDifference > 50) {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            setMobileMenuOpen(false);
          }, 200);
        }
      };

      if (scrollHandler) {
        window.addEventListener("scroll", scrollHandler, { passive: true });
      }
    }, 500); // Wait 500ms before listening to scroll events

    return () => {
      clearTimeout(activationTimeout);
      clearTimeout(scrollTimeout);
      if (scrollHandler) {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside the header
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const headerElement = target.closest("header");
      if (!headerElement) {
        setMobileMenuOpen(false);
      }
    };

    // Add listener after a small delay to avoid immediate closure
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    // Close menu first
    setMobileMenuOpen(false);
    
    if (element) {
      // Wait a tiny bit for menu to close, then calculate header height
      setTimeout(() => {
        const header = document.querySelector("header");
        const headerHeight = header ? header.getBoundingClientRect().height : 60;
        
        // Add a small buffer for better spacing (less on mobile)
        const isMobile = window.innerWidth < 768;
        const buffer = isMobile ? 8 : 16;
        const headerOffset = headerHeight + buffer;
        
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
          behavior: "smooth",
        });
      }, 50); // Small delay to let menu close
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#050509]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#10111d] text-[11px] font-semibold">
            TL
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-200">
              Tobias Ledoux
            </p>
            <p className="text-[11px] text-slate-500">Rhode Island · Personal Training</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-[11px] font-medium text-slate-200 md:flex">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="hover:text-[var(--neon-green)] transition-colors"
          >
            About
          </a>
          <a
            href="#coaching"
            onClick={(e) => handleNavClick(e, "#coaching")}
            className="hover:text-[var(--neon-green)] transition-colors"
          >
            Coaching
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, "#pricing")}
            className="hover:text-[var(--neon-green)] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, "#faq")}
            className="hover:text-[var(--neon-green)] transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="rounded-full border border-[var(--neon-green)]/70 bg-[#090915] px-4 py-1.5 text-[11px] font-semibold text-slate-100"
          >
            Free consult
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-[11px] font-medium text-slate-100 transition-colors md:hidden hover:border-slate-600"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${mobileMenuOpen ? "rotate-90" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`border-t border-slate-800 bg-[#050509] px-4 pb-4 pt-2 text-sm text-slate-200 md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#about"
          className="block py-1.5"
          onClick={(e) => handleNavClick(e, "#about")}
        >
          About
        </a>
        <a
          href="#coaching"
          className="block py-1.5"
          onClick={(e) => handleNavClick(e, "#coaching")}
        >
          Coaching
        </a>
        <a
          href="#pricing"
          className="block py-1.5"
          onClick={(e) => handleNavClick(e, "#pricing")}
        >
          Pricing
        </a>
        <a
          href="#faq"
          className="block py-1.5"
          onClick={(e) => handleNavClick(e, "#faq")}
        >
          FAQ
        </a>
        <a
          href="#contact"
          className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[var(--neon-green)]/70 bg-[#090915] px-4 py-2 text-[11px] font-semibold text-slate-100"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          Free consult
        </a>
      </nav>
    </header>
  );
}

