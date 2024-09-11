import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
}
