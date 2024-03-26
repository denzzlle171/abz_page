import picture from '../../img/Vector.svg';
import './userCard.css';

export const UserCard = ({ user }) => {
  return (
    <div className="usersCard">
      <img className="photo" src={user.photo || picture} alt="avatar" />
      <p className="name tip cardItem" data-text={user.name}>
        {user.name}
      </p>
      <p className="position cardItem">{user.position}</p>
      <p className="mail tip cardItem" data-text={user.email}>
        {user.email}
      </p>
      <p className="telephone cardItem">{user.phone}</p>
    </div>
  );
};
