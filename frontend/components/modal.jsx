import React from 'react';
import SignInContainer from './sign_in_container';
import SignUpContainer from './sign_up_container';
import ReservationFormContainer from './reservation_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { modal } = this.props.modal ?? {};
        if(!modal) {
            return null;
        }
        let modalContent, modelHeaderText;
        modal = modal.split(" ");
        const modal_type = modal[0];
        switch (modal_type) {
            case 'sign_in':
                modalContent = <SignInContainer />;
                modelHeaderText = 'Log in';
                break;
            case 'sign_up':
                modalContent = <SignUpContainer />;
                modelHeaderText = 'Sign up';
                break;
            case 'reserve':
                modalContent = <ReservationFormContainer date={modal[1]} time={modal[2]} restaurantName={modal[3]} restaurantId={modal[4]} partySize={modal[5]}/>;
                modelHeaderText = 'Your reservation almost done!'
                break;
            default:
                modalContent = null;
                modelHeaderText = '';
                break;
        }
        return (
            <div className="modal-open-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <h3 className="sign-header-text">{modelHeaderText}</h3>
                        <button className="close-button" onClick={this.props.closeModal}>&times;</button>
                    </div>
                    {modalContent}
                </div>
            </div>
        );
    }
}

export default Modal;
