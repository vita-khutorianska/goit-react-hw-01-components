import PropTypes from 'prop-types';
import './Profile.css';
const User = ({ name, tag, location, avatar, likes, views, followers }) => (
  <div className="container">
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{name}</p>
        <p className="info">@{tag}</p>
        <p className="info">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats__item stats_border">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats__item stats_border">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats__item ">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

User.default = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/763/763704.svg',
};

User.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
export default User;
