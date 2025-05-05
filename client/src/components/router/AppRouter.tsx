import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingFallback from "@pages/LoadingFallback";

// Lazy-load pages for better performance
const Home = lazy(() => import('@pages/Home'));
const LegalNotice = lazy(() => import('@pages/LegalNotice'));
const NotFound = lazy(() => import('@pages/NotFound'));
const Donate = lazy(() => import('@pages/Donate'));

/**
 * Central Router component that manages all app routes
 */
const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter; 