import React from 'react';
import { Link } from "react-router-dom";
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        if (!this.props.restaurants) return null; 
        const {restaurants} = this.props;
        return (<div>
            {restaurants.map(restaurant => <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />)}
            <Link to={`/`}>Back</Link>
        </div>);
    }
}

export default RestaurantIndex;