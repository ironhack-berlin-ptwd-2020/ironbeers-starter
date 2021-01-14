import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllBeers from './AllBeers';
import BeerDetail from './BeerDetail';

function App() {
  return (
    <div>

      {/* <Switch> */}
      {/* /beers/test */}

      {/* <Route exact path="/beers" render={() => <AllBeers prop="value"></AllBeers>}></Route> */}

      <Route exact path="/beers" component={AllBeers}></Route>

      <Route exact path="/beers-details/:beerID" component={BeerDetail}></Route>

      {/* <Route exact path="/beers-details/:beerID" render={(props) => <AllBeers beerID={props.match.params.beerID}></AllBeers>}></Route> */}

      <Route path="/beers/test" >
        <h1>Hey, you're on the beers-test path</h1>
      </Route>

      {/* </Switch> */}

    </div>
  );
}

export default App;
