import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Working from "./components/Working";
import Bookfinder from "./components/Bookfinder";
import Checkout from "./components/Checkout";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <Working />
                <Card title="home-page-book-1" author="phoenix" price="900" />
                <Card title="home-page-book-2" author="dragon" price="300" />
                <Card title="home-page-book-3" author="jisoo" price="200" />
                <Card title="home-page-book-4" author="jett" price="399" />
                <Card title="home-page-book-5" author="raze" price="499" />
                <Card title="home-page-book-6" author="brim" price="800" />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Navbar />
                <Search />
                <Homepage />
                <Working />
                <Card title="home-page-book-1" author="phoenix" price="900" />
                <Card title="home-page-book-2" author="dragon" price="300" />
                <Card title="home-page-book-3" author="jisoo" price="200" />
                <Card title="home-page-book-4" author="jett" price="399" />
                <Card title="home-page-book-5" author="raze" price="499" />
                <Card title="home-page-book-6" author="brim" price="800" />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
        </Routes>
      </Router>

      {/* <Bookfinder/> */}
    </div>
  );
}

export default App;
