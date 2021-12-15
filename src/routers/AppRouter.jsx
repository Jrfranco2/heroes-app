import { Routes, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import LoginScreen from "../components/login/LoginScreen";
import SearchScreen from "../components/search/SearchScreen";
import MarvelScren from "../components/marvel/MarvelScreen";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MarvelScren />} />
        <Route path="/marvel" element={<MarvelScren />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
