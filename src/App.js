import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import Dashbord from "./components/Dashbord/Dashbord";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";
import Review from "./components/Reviews/Reviews";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>

        <Route path="/dashbord" element={<Dashbord></Dashbord>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
