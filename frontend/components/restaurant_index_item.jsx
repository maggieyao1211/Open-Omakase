import React from 'react';
import StarRatings from "react-star-ratings";
import { getImgSrcByRestaurantId } from "../util/general_util";
import { withRouter } from "react-router-dom";

class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { restaurant } = this.props;
        const { name, price_level, address, zip_code, average_rating } = restaurant;

        let price = null;
        switch (price_level) {
            case 5:
                price = '$$$$$';
                break;
            case 4:
                price = '$$$$';
                break;
            case 3:
                price = '$$$';
                break;
            default:
                break;
        }

        return (
        <div className="restaurant-item-container">
            <img className="restaurant-item-img" src={getImgSrcByRestaurantId(restaurant.id)} />
            <div className="restaurant-item-details">
                <div className="restaurant-item-name">{name}</div>
                <StarRatings
                    className="restaurant-item-rating"
                    rating={average_rating}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="orange"
                />
                <div className="restaurant-item-price-address">{`${price}`} &middot; {`${address} ${zip_code}`}</div>
                <div className="restaurant-item-reserve-buttons">
                    <button className="restaurant-reserve">16:30</button>
                    <button className="restaurant-reserve">17:00</button>
                    <button className="restaurant-reserve">17:30</button>
                    <button className="restaurant-reserve">18:00</button>
                    <button className="restaurant-reserve">18:30</button>
                </div>
                <div className="restaurant-item-reserve-buttons">
                    <button className="restaurant-reserve">19:00</button>
                    <button className="restaurant-reserve">19:30</button>
                    <button className="restaurant-reserve">20:00</button>
                    <button className="restaurant-reserve">20:30</button>
                    <button className="restaurant-reserve">21:00</button>
                </div>
            </div>
        </div>);
    }
}

export default withRouter(RestaurantIndexItem);