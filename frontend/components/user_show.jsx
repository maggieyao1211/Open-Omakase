import React from 'react';
import { Link } from "react-router-dom";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        if (!this.props.user) return null; 
        const {user} = this.props;
        return (<div>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <Link to={`/`}>Back</Link>
        </div>);
    }
}

export default UserShow;