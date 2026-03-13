interface SectionNavOptions {
  linkSelector?: string;
  sectionSelector?: string;
  rootMargin?: string;
  threshold?: number[];
}

export function initSectionNav(options: SectionNavOptions = {}) {
  const {
    linkSelector = '.section-nav-link',
    sectionSelector = 'section[id]',
    rootMargin = '-20% 0px -60% 0px',
    threshold = [0, 0.25, 0.5, 0.75, 1],
  } = options;

  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(linkSelector));
  const sections = Array.from(document.querySelectorAll<HTMLElement>(sectionSelector));

  if (navLinks.length === 0 || sections.length === 0) {
    return;
  }

  const setActiveSection = (activeId: string | null) => {
    navLinks.forEach((link) => {
      const isActive = link.dataset.sectionId === activeId;
      link.classList.toggle('opacity-100', isActive);
      link.classList.toggle('!text-foreground', isActive);
      link.classList.toggle('opacity-50', !isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  setActiveSection(sections[0].id);

  const observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (activeEntry) {
        setActiveSection(activeEntry.target.id);
      }
    },
    {
      rootMargin,
      threshold,
    }
  );

  sections.forEach((section) => observer.observe(section));
}
