import { useEffect } from "react";

const useScrollPosition = (scrollPositionName: string) => {
  useEffect(() => {
    if (scrollPositionName !== "") {
      const storedScrollPosition = localStorage.getItem(scrollPositionName);
      if (storedScrollPosition) {
        window.scrollTo(0, parseInt(storedScrollPosition, 10));
      }

      const saveScrollPosition = () => {
        if(window.scrollY > 0) {
          localStorage.setItem(scrollPositionName, window.scrollY.toString());
        }
      };

      window.addEventListener("scroll", saveScrollPosition);

      return () => window.removeEventListener("scroll", saveScrollPosition);
    }
  }, [scrollPositionName]);
};

export default useScrollPosition;
