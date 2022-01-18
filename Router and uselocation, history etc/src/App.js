import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menubar from './Menubar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Pricing from './Pricing';
import Buy from './Buy';
import Search from './Search';
import Error from './Error';

const App = () => {
  return (
    <>
      <Menubar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/portfolio/:gallery/:all" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/pricing" component={() => <Pricing price="10" />} />
        <Route exact path="/buy" render={() => <Buy buy="100" />} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
