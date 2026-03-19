import { useState, useEffect } from "react";

export function useViewport() {
  const [viewport, setViewport] = useState({
    width:  window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const update = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    const onOrientationChange = () => {
      requestAnimationFrame(() => requestAnimationFrame(update));
    };

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", onOrientationChange);
    const vv = window.visualViewport;
    if (vv) vv.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", onOrientationChange);
      if (vv) vv.removeEventListener("resize", update);
    };
  }, []);

  return viewport;
}
