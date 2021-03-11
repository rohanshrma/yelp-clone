import React from 'react';
import './App.css';
import logo from './logo.svg';
import BusinessList from '../BusinessList';
import SearchBar from '../SearchBar';
import { render } from '@testing-library/react';


class App extends React.Component{
  render() {
    <div className="App">
      <h1>Yelpie2</h1>
      <BusinessList />
      <SearchBar /> 
    </div>
    return();
    
  }
};

export default App;
