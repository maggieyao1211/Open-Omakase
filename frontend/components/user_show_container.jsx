import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../actions/user_actions';

const mapStateToProps = ({entities, session}, ownProps) => {
    let { userId } = ownProps.match.params;
    if (userId == null) {
        userId = session.currentUserId;
    }
    return {
        user: entities.users[userId],
        userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);