import React from 'react';
import { Link, withRouter } from "react-router-dom";
import RestaurantIndexContainer from './restaurant_index_container';

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

        let backgroundSrc = null;
        switch (city.id) {
            case 1:
                backgroundSrc = window.la;
                break;
            case 2:
                backgroundSrc = window.sf;
                break;
            case 3:
                backgroundSrc = window.mia;
                break;
            case 4:
                backgroundSrc = window.nyc;
                break;
            case 5:
                backgroundSrc = window.hnl;
                break;
            default:
                break;
        }

        return (
        <div>
            <div className="city-background">
                <img src={backgroundSrc} />
                <h1 className="city-background-text">{`${city.name}, ${city.state}`}</h1>
            </div>
            <RestaurantIndexContainer cityId={city.id}/>
        </div>);
    }
}

export default withRouter(CityShow);