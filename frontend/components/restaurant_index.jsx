import React from 'react';
import { Link, withRouter } from "react-router-dom";
import RestaurantIndexItem from './restaurant_index_item';
import { FaMoneyBillAlt, FaStarHalfAlt } from 'react-icons/fa';
import StarRatings from "react-star-ratings";

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prices: [],
            rating: null,
        };
        this.onPirceClick = this.onPirceClick.bind(this);
        this.onRatingClick = this.onRatingClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurants({city_id: this.props.cityId});
    }

    onPirceClick(price) {
        let newPrices = Object.assign([], this.state.prices);
        if (newPrices.includes(price)) {
            newPrices = newPrices.filter(newPrice => newPrice !== price);
        } else {
            newPrices.push(price);
        }
        this.setState({prices: newPrices});
    }

    onRatingClick(e) {
        this.setState({rating: Number(e.currentTarget.value)});
    }

    render() {
        if (!this.props.restaurants) return null; 
        const {restaurants} = this.props;
        const { prices, rating } = this.state;
        return (
        <div className="page-content">
            <div className="restaurant-index-container">
            <div className="restaurant-filters-container">
                <div className="restaurant-filters-title">
                    <FaStarHalfAlt />
                    <span className="restaurant-filters-text">Rating</span>
                </div>
                <div className="restaurant-filters-rating">
                    <div>
                        <input type="radio" checked={rating === 5} onChange={this.onRatingClick} value="5" />
                        <StarRatings
                            rating={5}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="orange"
                        />
                    </div>
                    <div>
                        <input type="radio" checked={rating === 4} onChange={this.onRatingClick} value="4" />
                        <StarRatings
                            rating={4}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="orange"
                        /> & up
                    </div>
                    <div>
                        <input type="radio" checked={rating === 3} onChange={this.onRatingClick} value="3" />
                        <StarRatings
                            rating={3}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="orange"
                        /> & up
                    </div>
                </div>
                <div className="restaurant-filters-title">
                    <FaMoneyBillAlt />
                    <span className="restaurant-filters-text">Price</span>
                </div>
                <div className="restaurant-filters-price">
                    <div className={prices.includes(3) ? "restaurant-filters-price-selected" : undefined} onClick={e => this.onPirceClick(3)}>$$$</div>
                    <div className={prices.includes(4) ? "restaurant-filters-price-selected" : undefined} onClick={e => this.onPirceClick(4)}>$$$$</div>
                    <div className={prices.includes(5) ? "restaurant-filters-price-selected" : undefined} onClick={e => this.onPirceClick(5)}>$$$$$</div>
                </div>
            </div>
            <div>
                {restaurants.length > 0 
                    ? restaurants.map(restaurant => <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />) 
                    : <h2 className="restaurant-no-results">No results, please choose different filters from left</h2>}
            </div>
        </div>
    </div>);
    }
}

export default withRouter(RestaurantIndex);