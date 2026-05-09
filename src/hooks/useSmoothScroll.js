import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const easeInOutCubic = (t) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const smoothScrollTo = (targetPosition, duration = 1200) => {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;

        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (elapsedTime < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    const handleClick = (event) => {
      const link = event.target.closest('a[href^="#"]');

      if (!link) return;

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (!targetElement) return;

      event.preventDefault();

      const navbarOffset = 90;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      smoothScrollTo(targetPosition, 1200);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}