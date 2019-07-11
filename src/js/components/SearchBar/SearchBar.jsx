import React from 'react';
import PropTypes from 'prop-types';
import { getWeather, updateOnChange } from './searchActions';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleCity = this.handleCity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCity(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(getWeather(value));
    // console.log(typeof e.target.value)
  }

  handleChange(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateOnChange(value));
  }
  handleSearch(e) {
    e.preventDefault();
    const { city, dispatch } = this.props;
    dispatch(getWeather(city));
  }

  render() {
    const { value } = this.props;
    return (
      <div className='col-md-12 mb-5'>
        <div className='btn-group' >
          <button type='button' className='btn btn-secondary' value='San Diego' onClick={ this.handleCity }>San Diego</button>
          <button type='button' className='btn btn-secondary' value='New York' onClick={ this.handleCity }>New York</button>
          <button type='button' className='btn btn-secondary' value='Washington' onClick={ this.handleCity }>Washington D.C</button>
          <button type='button' className='btn btn-secondary' value='London' onClick={ this.handleCity }>London</button>
          <button type='button' className='btn btn-secondary' value='Tokyo' onClick={ this.handleCity }>Tokyo</button>
        </div>
        <div className='row'>
          <input className='form-control col-sm-10' placeholder='Enter City' type='text' value={ value } onChange={ this.handleChange } />
          <button className='btn text-white bg-dark col-sm-2' onClick={ this.handleSearch } style={ { opacity: 0.9 } }>Get Weather!</button>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func,
  city: PropTypes.string,
  value: PropTypes.string
};
