import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Community from "../pages/Community";
import PostDetail from "../pages/PostDetail";
import Install from "../pages/Install";

import Navbar from "../components/Navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<PostDetail />} />
        <Route path="/install" element={<Install />} />
      </Routes>
    </BrowserRouter>
  );
}