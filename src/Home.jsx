// import Navbar from "./components/Navbar/Navbar.jsx" 
// import Footer from "./components/Footer/Footer.jsx"
import Hero from "./components/Hero/Hero.jsx"
import About from "./components/body/about/About.jsx"
import Event from "./components/body/events/Event.jsx";
import Resource from "./components/body/Resources/Resouce.jsx";
import Blog from "./components/body/Blog/Blog.jsx";
import Team from "./components/body/Team/Team.jsx";
import ContactSection from "./components/body/Contact/ContactSection.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import './Home.css'

const  Home = () => {
    return(
    <> 
        
      {/* <BackgroundVideo /> */}
      {/* <Navbar /> */}
      {/* <SplineScene/> */}
      <Hero />
      <About />
      <Event />
      <Resource />
      <Blog />
      <Team />
      <ContactSection />
      {/* <Footer /> */}
      
    </>
    );
};

export default Home;