import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Postgres from './components/Postgres';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.png';

import { Link } from 'react-router-dom';

const httpLink = new HttpLink({ uri: 'http://localhost:5000' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img 
            src={logo}
            alt="SpaceX"
            style={{width: 300, display: 'block', margin: 'auto'}} 
            />
          <div className="row">
            <div className="col-md-6">
              <Link to='/' className="btn btn-info btn-block">SpaceX API</Link>
            </div>
            <div className="col-md-6">
              <Link to='/postgres' className="btn btn-info btn-block">Database Postgres</Link>
            </div>
          </div>

          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
          <Route exact path="/postgres" component={Postgres} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
