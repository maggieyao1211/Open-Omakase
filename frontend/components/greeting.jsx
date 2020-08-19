import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.onSignInClick = this.onSignInClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
    }

    onSignInClick() {
        this.props.openModal('sign_in');
    }

    onSignUpClick() {
        this.props.openModal('sign_up');
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div className="greeting-container">
                <h2>OpenOmakase</h2>
                {currentUser != null ? (
                    <div>
                        <h4>{`Hi, ${currentUser.first_name}`}</h4>
                        <button className="sign-up-in" onClick={this.props.signOut}>Sign Out</button>
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
