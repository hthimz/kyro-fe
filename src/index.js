import HomePage from "./pages/Home/Home";
import UploadPage from "./pages/Upload/Upload";
import SearchPage from "./pages/Search/Search";
import { Routes, Route } from "react-router-dom";

//available routes for our app
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
