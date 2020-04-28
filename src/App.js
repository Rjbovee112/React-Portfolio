import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


/* components*/
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Contact from './pages/contact/contact';
import Portfolio from './pages/portfolio/portfolio';
import AboutMe from './pages/aboutme/aboutme';
import Home from './pages/home/home';
import Email from './pages/contact/email';
/*Pages*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect exact path="/" to="home" />
        <Route name="home" path="/index" component={Home} />
        <Route name="about" path="/about" component={AboutMe} />
        <Route name="contact" path="/contact" component={Contact} />
        <Route name="portfolio" path="/portfolio" component={Portfolio} />
        <Route name="email" path="/email" component={Email} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;