import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/MainPage";
import DocsLayout from "./layouts/DocsLayout";
import QuickStartPage from "./pages/QuickStartPage";
import NoisePage from "./pages/NoisePage";
import SplinePage from "./pages/SplinePage";
import FlowPage from "./pages/FlowPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/docs" element={<DocsLayout />}>
        {/* /docs */}
        <Route index element={<QuickStartPage />} />
        {/* /docs/noise */}
        <Route path="noise" element={<NoisePage />} />
        {/* /docs/spline */}
        <Route path="spline" element={<SplinePage />} />
        {/* /docs/flow */}
        <Route path="flow" element={<FlowPage />} />
      </Route>
    </Routes>
  );
}