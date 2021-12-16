import { Route, Routes } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";

import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";
import MarvelScren from "../components/marvel/MarvelScreen";
import HeroScreen from "../components/hero/HeroScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScren />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScren />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
