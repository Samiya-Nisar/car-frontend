import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Cars from './components/Cars/Cars'
import News from './components/News/News'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Cars />
      <News />
      <About />
      <Footer />
    </>
  );
}

export default App;
