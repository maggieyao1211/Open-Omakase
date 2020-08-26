import React from 'react';
import { Link, withRouter } from "react-router-dom";
import RestaurantIndexContainer from './restaurant_index_container';
import { getImgSrcByCityId } from '../util/general_util';

class CityShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId);
    }

    render() {
        if (!this.props.city) return null; 
        const {city, match} = this.props;
        const cityId = city.id;
        return (
        <div>
            <div className="city-background">
                <img src={getImgSrcByCityId(cityId)} />
                <h1 className="city-background-text">{`${city.name}, ${city.state}`}</h1>
            </div>
            <RestaurantIndexContainer cityId={cityId}/>
        </div>);
    }
}

export default withRouter(CityShow);