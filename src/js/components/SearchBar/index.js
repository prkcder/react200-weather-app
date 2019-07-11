import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    city: store.weather.city
  };
}

export default connect(mapStoreToProps)(SearchBar);
