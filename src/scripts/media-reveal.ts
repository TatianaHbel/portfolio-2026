interface MediaRevealOptions {
  imageSelector?: string;
  videoSelector?: string;
  hiddenClass?: string;
}

export function initMediaReveal(options: MediaRevealOptions = {}) {
  const {
    imageSelector = 'img',
    videoSelector = 'video[data-inline-autoplay]',
    hiddenClass = 'opacity-0',
  } = options;

  document.querySelectorAll<HTMLImageElement>(imageSelector).forEach((image) => {
    if (image.complete) {
      image.classList.remove(hiddenClass);
      return;
    }

    image.addEventListener('load', () => image.classList.remove(hiddenClass), { once: true });
  });

  document.querySelectorAll<HTMLVideoElement>(videoSelector).forEach((video) => {
    if (video.readyState >= 3) {
      video.classList.remove(hiddenClass);
      return;
    }

    video.addEventListener('loadeddata', () => video.classList.remove(hiddenClass), { once: true });
  });
}
