import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Projects from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
