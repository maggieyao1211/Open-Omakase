import React from 'react';
import { getImgSrcByRestaurantId } from '../util/general_util';
import { FcCalendar, FcClock } from 'react-icons/fc';
import { BsPeople } from 'react-icons/bs';
import { Redirect } from "react-router-dom";

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            specialNotice: null,
            loadingConfirm: false,
            redirectToUserPage: false,
        };
        this.onSpecialNoticeChange = this.onSpecialNoticeChange.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
    }

    onSpecialNoticeChange(e) {
        e.preventDefault();
        this.setState({
            specialNotice: e.currentTarget.value,
        });
    }

    onConfirmClick(e) {
        this.setState({
            loadingConfirm: true,
        });
        e.preventDefault();
        const { currentUserId, restaurantId, date, time, partySize, reservationId } = this.props;
        const reservationData = {
            user_id: currentUserId,
            restaurant_id: restaurantId,
            reserve_date: date,
            reserve_time: time,
            party_size: partySize,
            special_notice: this.state.specialNotice,
        };

        if (reservationId != null && reservationId != '') {
            this.props.updateReservation(reservationId, reservationData).then(() => {
                this.setState({
                    loadingConfirm: false,
                });
                this.props.closeModal();
                location.reload();
            });
        } else {
            this.props.createReservation(reservationData).then(() => {
                this.setState({
                    redirectToUserPage: true,
                    loadingConfirm: false,
                });
                this.props.closeModal();
            });
        }
    }

    render() {
        if (this.state.redirectToUserPage) {
            return <Redirect to="/users/" />;
        }
        return (
        <div className="reservation-form-container">
            <div className="reservation-details-container">
                <img src={getImgSrcByRestaurantId(this.props.restaurantId)} />
                <div>
                    <div className="reservation-restaurant-name">{this.props.restaurantName}</div>
                    <div className="reservation-details">
                        <div><FcCalendar className="reservation-details-icson" />{this.props.date}</div>
                        <div><FcClock className="reservation-details-icson" />{this.props.time}</div>
                        <div><BsPeople className="reservation-details-icson" />{this.props.partySize}</div>
                    </div>
                </div>
            </div>
            <input className="reservation-form-input" placeholder="Special request (optional)" type="text" onChange={this.onSpecialNoticeChange}/>
            <button className="lets-omakase" onClick={this.onConfirmClick}>
                {this.state.loadingConfirm ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : 'Confirm Reservation'}
            </button>
        </div>);
    }
}

export default ReservationForm;