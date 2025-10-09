import { MAX_WIDTH_MOBILE_VIEWPORT } from "@/consts/responsive-const";
import { useEffect } from "react";

export function useResponsiveRem(baseWidth = 1920, baseFontSize = 17) {
  useEffect(() => {
    function updateFontSize() {
      const currentWidth = window.innerWidth;
      const isMobileWidth = currentWidth <= MAX_WIDTH_MOBILE_VIEWPORT;
      const scale = currentWidth / baseWidth;
      let base = baseFontSize;
      if (isMobileWidth) return;

      if (currentWidth >= 1024 && currentWidth < 1280) {
        base = 20;
      }
      if (currentWidth >= 768 && currentWidth <= MAX_WIDTH_MOBILE_VIEWPORT) {
        base = 42;
      } else if (currentWidth > baseWidth) {
        base = 12;
      }
      document.documentElement.style.fontSize = `${base * scale}px`;
    }

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, [baseWidth, baseFontSize]);
}