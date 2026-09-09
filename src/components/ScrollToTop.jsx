import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on route change. In-page hash links are left alone so the
 * browser can handle them (used by the portfolio index).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
