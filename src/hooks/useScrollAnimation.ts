import { useEffect } from 'react';

const useScrollAnimation = (elementId: string) => {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const scrollY = window.scrollY;
        if (scrollY > lastScrollY) {
          element.style.opacity = "0.5";
          element.style.transform = "scale(0.7)";
        } else {
          element.style.opacity = "1";
          element.style.transform = "scale(1)";
        }
        lastScrollY = scrollY;
      }
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition, 10));
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementId]);
};

export default useScrollAnimation;
