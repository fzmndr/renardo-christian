import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest('a[href^="#"]');

      if (!link) return;

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (!targetElement) return;

      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}