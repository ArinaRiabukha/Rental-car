import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const CatalogPage = lazy(() => import("./pages/CatalohPage/CatalogPage"));

function App() {
  return (
    <main>
      <Suspense fallback={<p className="loader">Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
