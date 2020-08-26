import React from 'react';
import { Link } from "react-router-dom";
import { getImgSrcByRestaurantId } from '../util/general_util';
import { FcCalendar, FcClock } from 'react-icons/fc';
import { BsPeople } from 'react-icons/bs';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cancelReservationId: null,
        };
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    onCancelClick(reservationId) {
        return e => {
            this.setState({cancelReservationId: reservationId});
            this.props.cancelReservation(reservationId)
                .then(() => {
                    this.props.fetchUser(this.props.userId);
                    this.setState({cancelReservationId: null});
                });
        }
    }

    render() {
        if (!this.props.user) return null; 
        const { user } = this.props;
        const reservations = user.reservations != null ? Object.values(user.reservations) : [];
        return (
        <div className="user-show-container">
            <h1>User Profile</h1>
            <div className="user-show-profile">
                <label><span>First Name:</span> {user.first_name}</label>
                <label><span>Last Name:</span> {user.last_name}</label>
                <label><span>Email:</span> {user.email}</label>
            </div>
            <h1>Reservations</h1>
            {reservations.length === 0 ? <div className="user-show-no-reservation">You don't have reservations</div> : reservations.map(reservation => (
                <div className="user-show-profile" key={reservation.id}>
                    {this.state.cancelReservationId === reservation.id 
                    ? <div className="lds-ring-red"><div></div><div></div><div></div><div></div></div> 
                    : <>
                        <div className="reservation-details-container">
                            <img src={getImgSrcByRestaurantId(reservation.restaurant_id)} />
                            <div>
                                <div className="reservation-restaurant-name">{reservation.restaurant_name}</div>
                                <div className="reservation-details">
                                    <div><FcCalendar className="reservation-details-icson" />{reservation.reserve_date}</div>
                                    <div><FcClock className="reservation-details-icson" />{reservation.reserve_time}</div>
                                    <div><BsPeople className="reservation-details-icson" />{reservation.party_size}</div>
                                </div>
                            </div>
                        </div>
                        <label><span>Special Notice:</span> {reservation.special_notice}</label>
                        <span className="user-show-change-reservation" onClick={this.onCancelClick(reservation.id)}>Cancel</span>
                    </>}
                </div>
            ))}
        </div>);
    }
}

export default UserShow;