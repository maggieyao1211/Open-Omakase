import React from 'react';

class SignIn extends React.Component {
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
        const { formType, errors } = this.props;
        return (
            <div className="sign-container">
                {errors != null && errors.length > 0 && <div>{errors.map(error => <h4>{error}</h4>)}</div>}
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
                    <button className="lets-omakase">Let's Omakase!</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
