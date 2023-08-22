import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

 const FriendsListItem = ({ friend }) => {
  return (
          <li className={css.item} key ={friend.id}>
            <div className={friend.isOnline ? css.iconOnline : css.iconOffline }></div>
            <span className={css.status}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
          </li>
        )};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};


export default FriendsListItem