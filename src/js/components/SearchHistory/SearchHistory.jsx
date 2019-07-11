import React from 'react';
import PropTypes from 'prop-types';

export default class SearchHistory extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className='card bg-dark text-white ' style={ { opacity: 0.9 } }>
        <div className='card-header'>
          Search History
        </div>
        <div className='card-body' id='history-scroll'>
          <table className='table table-striped '>
            <tbody>
              { history.map((cityHistory, index) => (
                <tr key={ index }>
                  <td >{ cityHistory.cityName }</td>
                  <td className='flex-end'>{ cityHistory.date }</td>
                </tr>
              )
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

SearchHistory.propTypes = {
  history: PropTypes.array
};
