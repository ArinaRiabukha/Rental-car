import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <main>
      <Suspense fallback={<p className="loader">Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
