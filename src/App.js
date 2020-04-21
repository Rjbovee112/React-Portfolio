import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* components*/
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Contact from './pages/contact/contact';
import Portfolio from './pages/portfolio/portfolio';
import AboutMe from './pages/aboutme/aboutme';
/*Pages*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route name="about" path="/about" component={AboutMe} />
        <Route name="contact" path="/contact" component={Contact} />
        <Route name="portfolio" path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;