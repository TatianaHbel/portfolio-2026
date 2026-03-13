function closeMenu(
  mobileMenu: HTMLElement | null,
  topLine: HTMLElement | null,
  bottomLine: HTMLElement | null
) {
  mobileMenu?.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
  mobileMenu?.classList.remove('opacity-100', 'translate-y-0');
  topLine?.classList.remove('rotate-45', 'translate-y-[2.9px]');
  bottomLine?.classList.remove('-rotate-45', '-translate-y-[2.9px]');
}

function openMenu(
  mobileMenu: HTMLElement | null,
  topLine: HTMLElement | null,
  bottomLine: HTMLElement | null
) {
  mobileMenu?.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
  mobileMenu?.classList.add('opacity-100', 'translate-y-0');
  topLine?.classList.add('rotate-45', 'translate-y-[2.9px]');
  bottomLine?.classList.add('-rotate-45', '-translate-y-[2.9px]');
}

export function initHeader() {
  const header = document.getElementById('site-header');
  const hamburgerButton = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const topLine = document.getElementById('hamburger-top');
  const bottomLine = document.getElementById('hamburger-bottom');

  if (header instanceof HTMLElement) {
    header.style.transition = 'opacity 0.3s ease-out';
    requestAnimationFrame(() => {
      header.style.opacity = '1';
    });
  }

  if (!(hamburgerButton instanceof HTMLElement)) {
    return;
  }

  let menuOpen = false;

  hamburgerButton.addEventListener('click', () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      openMenu(mobileMenu, topLine, bottomLine);
      return;
    }

    closeMenu(mobileMenu, topLine, bottomLine);
  });

  document.addEventListener('mousedown', (event) => {
    if (!menuOpen || !(header instanceof HTMLElement)) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Node) || header.contains(target)) {
      return;
    }

    menuOpen = false;
    closeMenu(mobileMenu, topLine, bottomLine);
  });
}
