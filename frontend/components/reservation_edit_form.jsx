import React from 'react';
import { allTimes, getNearbyTimeslots } from '../util/general_util';


class ReservationEditForm extends React.Component {
    constructor(props) {
        super(props);
        const { date, time, partySize } = this.props;
        this.state = {
            partySize,
            reserveDate: date,
            reserveTime: time,
            nearbyTimeslots: [],
        };
        this.onPartySizeChange = this.onPartySizeChange.bind(this);
        this.onReserveDateChange = this.onReserveDateChange.bind(this);
        this.onReserveTimeChange = this.onReserveTimeChange.bind(this);
        this.onFindTableClick = this.onFindTableClick.bind(this);
        this.onTimeslotClick = this.onTimeslotClick.bind(this);
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

    onTimeslotClick(timeslot) {
        return e => {
            e.preventDefault();
            const { reserveDate, partySize } = this.state;
            const { restaurantName, restaurantId, reservationId } = this.props;
            let modal = null;
            if (this.props.currentUserId != null) {
                modal = `reserve%-%-%${reserveDate}%-%-%${timeslot}%-%-%${restaurantName}%-%-%${restaurantId}%-%-%${partySize}%-%-%${reservationId}`;
            } else {
                modal = 'sign_in';
            }
            this.props.openModal(modal);
        };
    }

    render() {
        const {partySize, reserveDate, reserveTime, nearbyTimeslots} = this.state;
        return (<div>
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
                    <button className="time-slot-button" key={timeslot} onClick={this.onTimeslotClick(timeslot)}>
                        {timeslot.replace(":", " : ")}
                    </button>)
                }
            </div>
            <button className="lets-omakase" onClick={this.onFindTableClick}>Fina a table</button>
        </div>
        </div>);
    }
}

export default ReservationEditForm;