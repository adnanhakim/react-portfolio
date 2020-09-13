import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import aos from 'aos';
import 'aos/dist/aos.css';
import { db } from './firebase';

function App() {
   const [info, setInfo] = useState({});

   useEffect(() => {
      async function fetchInformation() {
         const doc = await db
            .collection('information')
            .doc('information')
            .get();

         if (doc.empty) {
            console.log('No information');
         } else {
            const data = doc.data();
            setInfo({
               key: data.id,
               homeTitle: data.homeTitle,
               homeBody: data.homeBody,
               image: data.image,
               quote: data.quote,
               resume: data.resume,
            });
         }
      }

      fetchInformation();

      // AOS
      aos.init({
         offset: 400,
         duration: 1000,
      });
   }, []);

   return (
      <div className="App">
         <Navbar />
         <Home
            homeTitle={info.homeTitle}
            homeBody={info.homeBody}
            image={info.image}
         />
         <Contact quote={info.quote} />
         <Projects />
         <Footer resume={info.resume} />
      </div>
   );
}

export default App;
