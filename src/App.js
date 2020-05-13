import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from "./components/header";
import SummaryPage from "./components/summary";
import AboutPage from "./components/about";
import WorkPage from "./components/work";
import ExperiencePage from "./components/experience";
import ContactPage from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
      <Router>
        <Header/>
        <SummaryPage/>
        <AboutPage/>
        <ExperiencePage/>
        <WorkPage/>
        <ContactPage/>
        <Footer/>
      </Router>
  );
}

export default App;
