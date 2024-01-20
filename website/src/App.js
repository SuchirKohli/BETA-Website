import { Route, Routes } from "react-router-dom";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import Team from "./pages/team/team";
import Gallery from "./pages/gallery/gallery";
import './App.css'

function ComponentWithHeaderFooter(component){
  return(
    <>
      {/* <Header /> */}
      {component}
      {/* <Footer /> */}
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/"         element={ComponentWithHeaderFooter(<Home />)} />
        <Route path="/about"    element={ComponentWithHeaderFooter(<Team />)} />
        {/* <Route path="/contact"  element={ComponentWithHeaderFooter(<Contact />)} /> */}
        <Route path="/gallery" element={ComponentWithHeaderFooter(<Gallery />)} />
        <Route path="/events"   element={ComponentWithHeaderFooter(<Events />)} />
        {/* <Route path="/expo"     element={<Expo />} /> */}
      </Routes>
    </>
  );
}

export default App;