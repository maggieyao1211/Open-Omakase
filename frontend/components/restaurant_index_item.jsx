import React from 'react';
import StarRatings from "react-star-ratings";
import { getImgSrcByRestaurantId, allTimes } from "../util/general_util";
import { Link, withRouter } from "react-router-dom";

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
                <Link to={`/restaurants/${restaurant.id}`}><div className="restaurant-item-name">{name}</div></Link>
                <StarRatings
                    className="restaurant-item-rating"
                    rating={average_rating}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="red"
                />
                <div className="restaurant-item-price-address">{`${price}`} &middot; {`${address} ${zip_code}`}</div>
                <div className="restaurant-item-reserve-buttons">
                    {allTimes.slice(0, 5).map(time => <Link to={`/restaurants/${restaurant.id}`} key={time}>
                        <button className="restaurant-reserve">{time}</button>
                    </Link>)}
                </div>
                <div className="restaurant-item-reserve-buttons">
                    {allTimes.slice(5, 10).map(time => <Link to={`/restaurants/${restaurant.id}`} key={time}>
                        <button className="restaurant-reserve">{time}</button>
                    </Link>)}
                </div>
            </div>
        </div>);
    }
}

export default withRouter(RestaurantIndexItem);