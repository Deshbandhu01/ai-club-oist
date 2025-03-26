import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar.jsx"; 
import Event_p from "./pages/Event_page/Event_p.jsx";
import Team_p from "./pages/Team_page/Team_p.jsx";
import Contact_p from "./pages/Contact_page/Contact_p.jsx";
import Blog_p from './pages/Blog_page/Blog_p.jsx';
import Home from "./home.jsx";
import Footer from './components/Footer/Footer.jsx';
import Cypher30_p from './pages/Cypher30/Cypher30_p.jsx';
import Tedx_p from './pages/TEDx_page/TEDx_p.jsx';
import Logo_p from './pages/Logo_page/Logo_p.jsx';
import Mag1 from './pages/Magzine_1.0/MAg1.jsx';
function App() {
  return(
    <> 
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event_p />} />
        <Route path="/team" element={<Team_p />} />
        <Route path="/contact" element={<Contact_p />} />
        <Route path="/blog" element={<Blog_p />} />
        <Route path="/Cypher30" element={<Cypher30_p />} />
        <Route path="/events/TEDx" element={<Tedx_p/>}/>
        <Route path="/events/LogoDesign" element={<Logo_p />} />
        <Route path="/events/Magazine_1.0" element={<Mag1 />} />
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App;
