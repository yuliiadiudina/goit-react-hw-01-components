import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendsListItem from "../FriendsListItem/FriendsListItem"

const FriendList = ({
    friends,
}) => {
  return (
    <ul className={css.friendList}>
		{friends.map(friend => (
      		<FriendsListItem key={friend.id} friend={friend} />
		))}
    </ul>
  );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired })
    ).isRequired,
  };


export default FriendList