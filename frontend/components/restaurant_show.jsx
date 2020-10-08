import React from 'react';
import { getImgSrcByRestaurantId, allTimes, getNearbyTimeslots, getDateStrFormat } from '../util/general_util';
import StarRatings from "react-star-ratings";
import { CgComment } from 'react-icons/cg';
import { RiBuilding4Line } from 'react-icons/ri';
import { BiLinkExternal } from 'react-icons/bi';
import { MdCall } from 'react-icons/md';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openReviewInput: false,
            rating: 0,
            comment: '',
            loadingSubmitReview: false,
            partySize: 2,
            reserveDate: getDateStrFormat(new Date()),
            reserveTime: '16:30',
            nearbyTimeslots: [],
            editReviewId: null,
        };
        this.onLeaveReviewClick = this.onLeaveReviewClick.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onPartySizeChange = this.onPartySizeChange.bind(this);
        this.onReserveDateChange = this.onReserveDateChange.bind(this);
        this.onReserveTimeChange = this.onReserveTimeChange.bind(this);
        this.onFindTableClick = this.onFindTableClick.bind(this);
        this.onTimeslotClick = this.onTimeslotClick.bind(this);
        this.onReivewEditClick = this.onReivewEditClick.bind(this);
        this.leaveReviewRef = React.createRef()
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    onLeaveReviewClick() {
        if (this.props.currentUserId != null) {
            this.setState({openReviewInput: true});
        } else {
            this.props.openModal('sign_in');
        }
    }

    onRatingChange(rating) {
        this.setState({rating});
    }

    onCommentChange(e) {
        this.setState({
            comment: e.currentTarget.value,
        });
    }

    onCancelClick() {
        this.setState({
            openReviewInput: false,
            comment: '',
            rating: 0,
            editReviewId: null,
        });
    }

    onSubmitClick(e) {
        this.setState({loadingSubmitReview: true});
        e.preventDefault();
        const reivewData = {
            comment: this.state.comment,
            rating: this.state.rating,
            user_id: this.props.currentUserId,
            restaurant_id: this.props.match.params.restaurantId,
        };
        const refetchRestaurantAndResetState = () => {
            this.props.fetchRestaurant(this.props.match.params.restaurantId);
            this.setState({
                openReviewInput: false,
                loadingSubmitReview: false,
                comment: '',
                rating: 0,
                editReviewId: null,
            });
        };
        if (this.state.editReviewId != null) {
            this.props.updateReview(this.state.editReviewId, reivewData).then(
                refetchRestaurantAndResetState
            );
        } else {
            this.props.createReview(reivewData).then(
                refetchRestaurantAndResetState
            );
        }
    }

    onPartySizeChange(e) {
        e.preventDefault();
        this.setState({
            partySize: e.currentTarget.value,
        });
    }

    onReserveDateChange(e) {
        e.preventDefault();
        this.setState({
            reserveDate: e.currentTarget.value,
        });
    }

    onReserveTimeChange(e) {
        e.preventDefault();
        this.setState({
            reserveTime: e.currentTarget.value,
        });
    }

    onFindTableClick(e) {
        e.preventDefault();
        this.setState({
            nearbyTimeslots: getNearbyTimeslots(this.state.reserveTime),
        });
    }

    onTimeslotClick(timeslot, restaurant) {
        return e => {
            e.preventDefault();
            const { reserveDate, partySize } = this.state;
            let modal = null;
            if (this.props.currentUserId != null) {
                modal = `reserve%-%-%${reserveDate}%-%-%${timeslot}%-%-%${restaurant.name}%-%-%${restaurant.id}%-%-%${partySize}`;
            } else {
                modal = 'sign_in';
            }
            this.props.openModal(modal);
        };
    }

    onReivewEditClick(review) {
        return e => {
            e.preventDefault();
            const { rating, comment } = review;  
            this.setState({
                openReviewInput: true,
                rating,
                comment,
                editReviewId: review.id,
            });
            window.scrollTo(0, this.leaveReviewRef.current.offsetTop - 25);
        };
    }

    render() {
        if (!this.props.restaurant) return null; 
        const {restaurant} = this.props;
        const {comment, openReviewInput, rating, loadingSubmitReview, partySize, reserveDate, reserveTime, nearbyTimeslots} = this.state;
        let price = null;
        switch (restaurant.price_level) {
            case 3:
                price = '$$$';
                break;
            case 4:
                price = '$$$$';
                break;
            case 5:
                price = '$$$$$';
                break;
            default:
                break;
        }
        const reviews = restaurant.reviews != null ? Object.values(restaurant.reviews) : [];
        return (
        <div>
            <div className="restaurant-show-background">
                <img src={getImgSrcByRestaurantId(restaurant.id)} />
                <h1 className="restaurant-show-background-text">{restaurant.name}</h1>
            </div>
            <div className="restaurant-show-content">
                <div className="restaurant-show-info">
                    <div className="restaurant-show-details">
                    <div className="restaurant-show-name">{restaurant.name}</div>
                    <div className="restaurant-show-subtitle">
                        <span>
                            <StarRatings
                            rating={restaurant.average_rating}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="red"
                            />
                        </span>
                        <span>{restaurant.average_rating}</span>
                        <span>{price}</span>
                    </div>
                    <div className="restaurant-show-description">{restaurant.description}</div>
                    <div className="restaurant-show-reviews-title" ref={this.leaveReviewRef}>
                        {reviews.length > 0 ? `What ${reviews.length} people are saying` : 'No reviews for this restaurant'}
                    </div>
                    {openReviewInput ? 
                        <div className="leave-reivew-input">
                            <div className="leave-reivew-input-row">
                                <div className="leave-reivew-input-row-name">Rating</div>
                                <StarRatings
                                    rating={rating}
                                    changeRating={this.onRatingChange}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="red"
                                />
                            </div>
                            <div>
                                <textarea 
                                    className="leave-reivew-input-text-area" 
                                    onChange={this.onCommentChange} 
                                    placeholder="Would you recommend to our friends and family?" 
                                    value={comment}
                                />
                            </div>
                            <div>
                                <button className="submit-button" onClick={this.onSubmitClick}>
                                    {loadingSubmitReview ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : "Submit"}
                                </button>
                                <span className="cancel-button" onClick={this.onCancelClick}>Cancel</span>
                            </div>
                        </div> : 
                        <button className="leave-reivew-button" onClick={this.onLeaveReviewClick}>
                            Leave a review
                        </button>
                    }
                    {reviews.map(review => 
                        <div className="restaurant-show-review" key={review.id}>
                            <div className="profile-pic-container">
                                <div className="profile-pic">{`${review.user_first_name[0] ?? ''}${review.user_last_name[0] ?? ''}`}</div>
                                <div>{`${review.user_first_name} ${review.user_last_name}`}</div>
                                <div className="profile-pic-reviews">
                                    <CgComment className="profile-pic-reviews-icon" /> {`${review.user_review_count} reivews`}
                                </div>
                                {
                                    this.props.currentUserId === review.user_id 
                                        && <div className="profile-pic-edit">
                                                <a onClick={this.onReivewEditClick(review)}>Edit</a>
                                           </div>
                                }
                            </div>
                            <div>
                                <StarRatings
                                    rating={review.rating}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="red"
                                />
                                <div className="restaurant-show-review-content">{review.comment}</div>
                            </div>
                        </div>)
                    }
                    </div>
                </div>
                <div className="restaurant-show-right-panel">
                <div className="restaurant-show-reservation">
                    <div className="restaurant-show-reservation-header">
                        <span>Make a reservation</span>
                    </div>
                    <div className="restaurant-show-reservation-content">
                        <div className="restaurant-show-reservation-party-size-text">Party Size</div>
                        <select className="restaurant-show-reservation-party-size-select" onChange={this.onPartySizeChange} value={partySize}>
                            <option value={2}>2 people</option>
                            <option value={3}>3 people</option>
                            <option value={4}>4 people</option>
                            <option value={5}>5 people</option>
                            <option value={6}>6 people</option>
                            <option value={7}>7 people</option>
                        </select>
                        <div className="restaurant-show-reservation-party-size-text">Date</div>
                        <input className="restaurant-show-reservation-party-size-select" type="date" onChange={this.onReserveDateChange} value={reserveDate} />
                        <div className="restaurant-show-reservation-party-size-text">Time</div>
                        <select className="restaurant-show-reservation-party-size-select" onChange={this.onReserveTimeChange} value={reserveTime}>
                            {allTimes.map(time => <option value={time} key={time}>{time.replace(":", " : ")}</option>)}
                        </select>
                        <div className="restaurant-show-reservation-time-slots">
                            {nearbyTimeslots.length > 0 && nearbyTimeslots.map(timeslot => 
                                <button className="time-slot-button" key={timeslot} onClick={this.onTimeslotClick(timeslot, restaurant)}>
                                    {timeslot.replace(":", " : ")}
                                </button>)
                            }
                        </div>
                        <button className="lets-omakase" onClick={this.onFindTableClick}>Fina a table</button>
                    </div>
                </div>
                <div className="restaurant-details-below-reservation">
                    {restaurant.phone_number != null && 
                        <div className="restaurant-show-subtitle"><MdCall className="reservation-details-icson" />{`${restaurant.phone_number}`}</div>
                    }
                    <div className="restaurant-show-subtitle"><RiBuilding4Line className="reservation-details-icson" />{`${restaurant.address}, ${restaurant.zip_code}`}</div>
                    {restaurant.website_url != null && 
                        <div className="restaurant-show-subtitle"><BiLinkExternal className="reservation-details-icson" />
                            <a href={restaurant.website_url} target="_blank">{`${restaurant.website_url}`}</a>
                        </div>
                    }
                </div>
                </div>
            </div>
        </div>);
    }
}

export default RestaurantShow;