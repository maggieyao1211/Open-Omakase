import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
                <h2>OpenOmakase</h2>
                {currentUser != null ? (
                    <div className="greeting-menu-container">
                        <span>{`Hi, ${currentUser.first_name} `}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <div className="greeting-menu-dropdown">
                            <div className="greeting-menu-row">My Reservations</div>
                            <div className="greeting-menu-row" onClick={this.onSignOutClick}>
                            {loadingLogout ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : `Log out`}
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
