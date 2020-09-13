import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import aos from 'aos';
import 'aos/dist/aos.css';

function App() {
   useEffect(() => {
      // AOS
      aos.init({
         offset: 400,
         duration: 1000,
      });
   });

   return (
      <div className="App">
         <Navbar />
         <Home />
         <Contact />
         <Projects />
         <Footer />
      </div>
   );
}

export default App;
