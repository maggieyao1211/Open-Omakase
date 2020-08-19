import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    onSubmitClick(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.closeModal());
    }

    render() {
        const { firstName, lastName, email, password } = this.state;
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
                    <button className="lets-omakase">Let's Omakase!</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
