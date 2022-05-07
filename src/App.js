import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import Dashbord from "./components/Dashbord/Dashbord";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>

        <Route path="/dashbord" element={<Dashbord></Dashbord>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
