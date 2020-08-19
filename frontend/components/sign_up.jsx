import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            ...this.props.user,
        };
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onSigninClick = this.onSigninClick.bind(this);
    }

    onSubmitClick(e) {
        this.setState({loading: true});
        e.preventDefault();
        this.props.action(this.state).then(() => {
            this.setState({loading: false});
            this.props.closeModal();
        });
    }

    onSigninClick(e) {
        e.preventDefault();
        this.props.openModal('sign_in');
    }

    render() {
        const { firstName, lastName, email, password, loading } = this.state;
        return (
            <div className="sign-container">
                <form className="sign-form" onSubmit={this.onSubmitClick}>
                    <input
                        className="sign-input"
                        placeholder="First Name *"
                        type="text"
                        value={firstName}
                        onChange={e => this.setState({first_name: e.currentTarget.value})}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Last Name *"
                        type="text"
                        value={lastName}
                        onChange={e => this.setState({last_name: e.currentTarget.value})}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Email *"
                        type="email"
                        value={email}
                        onChange={e => this.setState({email: e.currentTarget.value})}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Password *"
                        type="password"
                        value={password}
                        pattern=".{6,}"
                        title="6 characters minimum"
                        onChange={e => this.setState({password: e.currentTarget.value})}
                        required
                    />
                    <button className="lets-omakase">
                        {loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : `Let's Omakase!`}
                    </button>
                    <br />
                    <span>Already have an account? <a href="" onClick={e => this.onSigninClick(e)}>Log in</a></span>
                </form>
            </div>
        );
    }
}

export default SignUp;
