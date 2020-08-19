import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingSignin: false,
            loadingDemo: false,
            ...this.props.user,
        };
        this.onLetsOmakaseClick = this.onLetsOmakaseClick.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        this.onDemoLoginClick = this.onDemoLoginClick.bind(this);
    }

    onLetsOmakaseClick(e) {
        this.setState({loadingSignin: true});
        e.preventDefault();
        this.props.action(this.state)
            .then(() => {
                this.props.closeModal();
            })
            .always(() => {
                this.setState({loadingSignin: false});
            });
    }

    onSignupClick(e) {
        e.preventDefault();
        this.props.openModal('sign_up');
    }

    onDemoLoginClick(e) {
        this.setState({loadingDemo: true});
        e.preventDefault();
        this.props.action({
            email: 'DemoBot@openomakase.com',
            password: 'bigfatcat'
        })
        .then(() => {
            this.props.closeModal();
        })
        .always(() => {
            this.setState({loadingDemo: false});
        });
    }

    render() {
        const { formType, errors } = this.props;
        const { loadingSignin, loadingDemo } = this.state;
        return (
            <div className="sign-container">
                {errors != null && errors.length > 0 && <div className="sign-error">{errors.map(error => <p>{error}</p>)}</div>}
                <form className="sign-form" onSubmit={e => this.onLetsOmakaseClick(e)}>
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
                    <button className="lets-omakase" type="submit">
                        {loadingSignin ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : `Let's Omakase!`}
                    </button>
                    <button className="lets-omakase" onClick={e => this.onDemoLoginClick(e)}>
                        {loadingDemo ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : `Demo Login`}
                    </button>
                    <br />
                    <span>Don't have an account? <a href="" onClick={e => this.onSignupClick(e)}>Sign up</a></span>
                </form>
            </div>
        );
    }
}

export default SignIn;
