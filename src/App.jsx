import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import Current from "./pages/current";
import Contact from "./pages/contact";
import Past from "./pages/past";
import Resume from "./pages/resume";

function AppWrapper() {
  const location = useLocation();

  // Hide navbar on homepage ("/")
  const showNavbar = location.pathname !== "/";

  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current" element={<Current />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/past" element={<Past />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;