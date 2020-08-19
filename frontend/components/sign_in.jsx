import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            ...this.props.user,
        };
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
    }

    onSubmitClick(e) {
        this.setState({loading: true});
        e.preventDefault();
        this.props.action(this.state).then(() => {
            this.setState({loading: false});
            this.props.closeModal();
        });
    }

    onSignupClick(e) {
        e.preventDefault();
        this.props.openModal('sign_up');
    }

    render() {
        const { formType, errors } = this.props;
        const { loading } = this.state;
        return (
            <div className="sign-container">
                {errors != null && errors.length > 0 && <div className="sign-error">{errors.map(error => <p>{error}</p>)}</div>}
                <form className="sign-form" onSubmit={e => this.onSubmitClick(e)}>
                    <input
                        className="sign-input"
                        placeholder="Email *"
                        type="email"
                        value={this.state.email}
                        onChange={e => this.setState({email: e.currentTarget.value})}
                        required
                     />
                    <input
                        className="sign-input"
                        placeholder="Password *"
                        type="password"
                        value={this.state.password}
                        onChange={e => this.setState({password: e.currentTarget.value})}
                        required
                    />
                    <button className="lets-omakase">
                        {loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : `Let's Omakase!`}
                    </button>
                    <br />
                    <span>Don't have an account? <a href="" onClick={e => this.onSignupClick(e)}>Sign up</a></span>
                </form>
            </div>
        );
    }
}

export default SignIn;
