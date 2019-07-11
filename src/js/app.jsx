import React from 'react';
import SearchBar from './components/SearchBar';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Weather Application</h1>
          <br/>
          <br/>
          <h6>Always know if you need an umbrella!</h6>
        </div>
        <div className='row'>
          <SearchBar />
        </div>
        <div className='row'>
          <div className='col-md-6 mb-4'>
            <CityInfo />
          </div>
          <div className='col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
