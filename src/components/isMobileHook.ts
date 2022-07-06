import React, { useEffect, useLayoutEffect, useState } from "react";
import { breakpoints } from "../styles/breakpoints";

export const useIsMobile = (): boolean => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 576;

  return isMobile;
};
