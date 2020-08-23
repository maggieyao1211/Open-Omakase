import { connect } from 'react-redux';
import CityShow from './city_show';
import { fetchCity } from '../actions/city_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = ({entities}, ownProps) => {
    return {
        city: entities.cities[ownProps.match.params.cityId],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCity: cityId => dispatch(fetchCity(cityId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CityShow));