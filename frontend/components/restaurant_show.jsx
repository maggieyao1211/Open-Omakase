import React from 'react';
import { Link } from "react-router-dom";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    render() {
        if (!this.props.restaurant) return null; 
        const {restaurant} = this.props;
        return (<div>
            <h1>{restaurant.name}</h1>
            <h1>{restaurant.website_url}</h1>
            <h1>{restaurant.address}</h1>
            <h1>{restaurant.zip_code}</h1>
            <h1>{restaurant.phone_number}</h1>
            <h1>{restaurant.price_level}</h1>
            <h1>{restaurant.average_rating}</h1>
            <h1>{restaurant.city_id}</h1>
            <Link to={`/`}>Back</Link>
        </div>);
    }
}

export default RestaurantShow;