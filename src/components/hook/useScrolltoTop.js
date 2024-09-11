import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

useLayoutEffect(() => {
  const { pathname } = useLocation();
  document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, [pathname]);
