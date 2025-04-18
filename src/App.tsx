import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { api } from "./api";
import { MemeType } from "./types";

import IndexPage from "@/pages/index";
import MemesPage from "@/pages/memes";
import NotFound from "@/pages/notFound";

function App() {
  const [memes, setMemes] = useState<Array<MemeType>>([]);

  useEffect(() => {
    api.getMemes().then((res) => {
      if (res?.data) setMemes(res.data.data);
    });
  }, []);

  return (
    <Routes>
      <Route
        element={<IndexPage memes={memes} setMemes={setMemes} />}
        path="/"
      />
      <Route element={<MemesPage memes={memes} />} path="/memes" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
