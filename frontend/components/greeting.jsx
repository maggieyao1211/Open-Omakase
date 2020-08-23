import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingLogout: false,
        }
        this.onSignInClick = this.onSignInClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
        this.onSignOutClick = this.onSignOutClick.bind(this);
    }

    onSignInClick() {
        this.props.openModal('sign_in');
    }

    onSignUpClick() {
        this.props.openModal('sign_up');
    }

    onSignOutClick() {
        this.setState({loadingLogout: true});
        this.props.signOut()
            .always(() => this.setState({loadingLogout: false}));
    }

    render() {
        const { currentUser } = this.props;
        const { loadingLogout } = this.state;
        return (
            <div className="greeting-container">
                <Link className="greeting-container-title-link" to="/"><h2 className="greeting-container-title">OpenOmakase</h2></Link>
                {currentUser != null ? (
                    <div className="greeting-menu-container">
                        <span>{`Hi, ${currentUser.first_name} `}</span>
                        <FaAngleDown />
                        <div className="greeting-menu-dropdown">
                            <Link to="/users" className="greeting-link"><div className="greeting-menu-row">My Reservations</div></Link>
                            <div className="greeting-menu-row" onClick={this.onSignOutClick}>
                            {loadingLogout ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : `Log out`}
                            </div>
                        </div>
                    </div>
                ) : (
                    <span>
                        <button className="sign-up-in" onClick={this.onSignInClick}>Sign In</button>
                        <button className="sign-up-in" onClick={this.onSignUpClick}>Sign Up</button>
                    </span>
                )}
            </div>
        );
    }
}

export default Greeting;
