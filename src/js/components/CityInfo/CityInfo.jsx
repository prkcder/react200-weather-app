import React from 'react';
import PropTypes from 'prop-types';

export default class CityInfo extends React.Component {
  render() {
    const {
      cityName,
      lat,
      lon,
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      windSpeed
    } = this.props;

    return (
      <div className='card bg-dark text-white ' style={ { opacity: 0.9 } }>
        <div className='card-header'>City Information</div>
        <div className='card-body text-center'>
          <h3>{ cityName }</h3>
          <p>Lat/Long: { lat }, { lon } </p>
          <hr />
          <div className='row'>
            <div className='col'>
              <h6 className='text-center'>Temperature (F)</h6>
              <p className='text-center text-success font-weight-bold'>{ temp }F</p>
            </div>
            <div className='col'>
              <h6 className='text-center'>Pressure</h6>
              <p className='text-center text-success font-weight-bold'>{ pressure }</p>
            </div>
            <div className='col'>
              <h6 className='text-center'>Humidity</h6>
              <p className='text-center text-success font-weight-bold'>{ humidity }%</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <h6 className='text-center'>Lowest Temperature (F)</h6>
              <p className='text-center text-success font-weight-bold'>{ temp_min }F</p>
            </div>
            <div className='col'>
              <h6 className='text-center'>Highest Temperature (F)</h6>
              <p className='text-center text-success font-weight-bold'>{ temp_max }F</p>
            </div>
            <div className='col'>
              <h6 className='text-center'>Wind Speed</h6>
              <p className='text-center text-success font-weight-bold'>{ windSpeed }mph</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CityInfo.propTypes = {
  cityName: PropTypes.string,
  lat: PropTypes.number,
  lon: PropTypes.number,
  temp: PropTypes.number,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  temp_min: PropTypes.number,
  temp_max: PropTypes.number,
  windSpeed: PropTypes.number
};
