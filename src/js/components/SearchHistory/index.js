import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
  return {
    cityName: store.weather.cityName,
    history: store.weather.history
  };
}

export default connect(mapStoreToProps)(SearchHistory);
