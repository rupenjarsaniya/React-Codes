import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Menubar from './Components/Menubar';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Buy from './Components/Buy';
import Error from './Components/Error';
import Footer from './Components/Footer';
import Contactimage from './Image/Contact.svg';
import Porfolioimage from './Image/Portfolio.svg';
import Homeimage from './Image/Vdata.svg';
import Homeimagefirst from './Image/Data.svg';
import Homeimagesecond from './Image/Version control.svg';
import Buyimage from './Image/Business.svg';
import Errorimage from './Image/Error page.svg';

const App = () => {
  return (
    <>
      <Menubar />
      <Switch>
        <Route exact path="/" component={() => <Home Homeimage={Homeimage} Homeimagefirst={Homeimagefirst} Homeimagesecond={Homeimagesecond} />} />
        <Route exact path="/portfolio" component={() => <Portfolio Porfolioimage={Porfolioimage} />} />
        <Route exact path="/contact" component={() => <Contact Contactimage={Contactimage} />} />
        <Route exact path="/buy" component={() => <Buy Buyimage={Buyimage} />} />
        <Route component={() => <Error Errorimage={Errorimage} />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;