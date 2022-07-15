import React, { useEffect, useRef, useState } from "react";
import { breakpointsNumbers, displayTypes } from "src/types";

export const useIsMobile = (display: displayTypes = "576px"): boolean => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const displayValue = useRef<number>()

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  switch(display) {
    case '1400px': 
      displayValue.current = breakpointsNumbers['1400px']
      break;
  
    case '1200px': 
      displayValue.current = breakpointsNumbers['1200px']
      break;
    
    case '992px':
      displayValue.current = breakpointsNumbers['992px']
      break;

    case '768px':
      displayValue.current = breakpointsNumbers['768px']
      break;
  
    default:
      displayValue.current = breakpointsNumbers['576px']
      break;
  }

  const isMobile = width <= displayValue.current;

  return isMobile;
};
