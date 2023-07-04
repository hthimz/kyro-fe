import HomePage from "./pages/Home";
import UploadPage from "./pages/Upload";
import SearchPage from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const FunctionalApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="upload" element={<UploadPage />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  );
};
export default FunctionalApp;
