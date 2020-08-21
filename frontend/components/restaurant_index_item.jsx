import React from 'react';

class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {restaurant} = this.props;
        console.log(restaurant);
        return (<div>
            <h1>{restaurant.name}</h1>
            <h1>{restaurant.website_url}</h1>
            <h1>{restaurant.address}</h1>
            <h1>{restaurant.zip_code}</h1>
            <h1>{restaurant.phone_number}</h1>
            <h1>{restaurant.price_level}</h1>
            <h1>{restaurant.average_rating}</h1>
            <h1>{restaurant.city_id}</h1>
        </div>);
    }
}

export default RestaurantIndexItem;