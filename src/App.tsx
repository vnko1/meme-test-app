import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import MemesPage from "@/pages/memes";
import NotFound from "@/pages/notFound";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<MemesPage />} path="/memes" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
