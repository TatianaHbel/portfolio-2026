const CURSOR_LABELS: Record<string, string> = {
  pointer: '',
  email: 'Email',
  'case-study': 'View Case Study',
  overview: 'Overview',
  site: 'Visit Site',
  'coming-soon': 'Coming Soon',
};

const CURSOR_ICONS: Record<string, string> = {
  'case-study':
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  site:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
};

export function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const inner = document.getElementById('cursor-inner');
  const labelElement = document.getElementById('cursor-label');
  const iconElement = document.getElementById('cursor-icon');

  if (!(cursor instanceof HTMLElement) || !(inner instanceof HTMLElement)) {
    return;
  }

  let visible = false;

  const setCursorState = (type: string | null) => {
    if (!type || type === 'pointer') {
      inner.style.width = '16px';
      inner.style.height = '16px';
      inner.style.padding = '0';

      if (labelElement instanceof HTMLElement) {
        labelElement.style.opacity = '0';
        labelElement.style.width = '0';
      }

      if (iconElement instanceof HTMLElement) {
        iconElement.style.opacity = '0';
        iconElement.style.marginRight = '0';
        iconElement.innerHTML = '';
      }

      return;
    }

    const label = CURSOR_LABELS[type] ?? type;
    const icon = CURSOR_ICONS[type] ?? null;

    inner.style.padding = '6px 14px';
    inner.style.width = 'auto';
    inner.style.height = '32px';

    if (iconElement instanceof HTMLElement) {
      if (icon) {
        iconElement.innerHTML = icon;
        iconElement.style.opacity = '1';
        iconElement.style.marginRight = '6px';
      } else {
        iconElement.style.opacity = '0';
        iconElement.style.marginRight = '0';
        iconElement.innerHTML = '';
      }
    }

    if (labelElement instanceof HTMLElement) {
      labelElement.textContent = label;
      labelElement.style.width = 'auto';
      labelElement.style.opacity = '1';
    }
  };

  document.addEventListener('mousemove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    if (!visible) {
      visible = true;
      cursor.style.opacity = '1';
      cursor.style.visibility = 'visible';
    }
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    visible = false;
  });

  document.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const element = target.closest('[data-cursor]');
    setCursorState(element?.getAttribute('data-cursor') ?? null);
  });

  document.addEventListener('mouseout', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const element = target.closest('[data-cursor]');
    if (element) {
      setCursorState(null);
    }
  });
}
