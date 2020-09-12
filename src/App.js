import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
   return (
      <div className="App">
         <Header />
         <Home />
         <Contact />
         <Projects />
         <Footer />
      </div>
   );
}

export default App;
