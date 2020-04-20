import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* components*/
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

/*Pages*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;