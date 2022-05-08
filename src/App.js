import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import Dashbord from "./components/Dashbord/Dashbord";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";

import Blogs from "./components/Blogs/Blogs";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>

        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashbord" element={<Dashbord></Dashbord>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
