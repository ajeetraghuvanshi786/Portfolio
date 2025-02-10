import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById(pathname.substring(1))?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToSection;