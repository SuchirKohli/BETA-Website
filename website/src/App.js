import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import Team from "./pages/team/team";
import Gallery from "./pages/gallery/gallery";
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<Team />} />
        {/* <Route path="/contact"  element={<Contact />)} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events"   element={<Events />} />
        {/* <Route path="/expo"     element={<Expo />} /> */}
      </Routes>
    </>
  );
}

export default App;