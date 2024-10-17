import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <Router>
      <div className="app inner">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore/:categoryId/:pageId" element={<Explore />} />
          <Route path="/explore/detail/:itemId" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
