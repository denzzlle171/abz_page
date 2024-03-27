import picture from '../../img/Vector.svg';
import './userCard.scss';

export const UserCard = ({ user }) => {
  return (
    <div className="usersCard">
      <img
        className="usersCard__photo"
        src={user.photo || picture}
        alt="avatar"
      />
      <p className="name tip usersCard__Item" data-text={user.name}>
        {user.name}
      </p>
      <p className="position  usersCard__Item">{user.position}</p>
      <p className="mail tip  usersCard__Item" data-text={user.email}>
        {user.email}
      </p>
      <p className="telephone  usersCard__Item">{user.phone}</p>
    </div>
  );
};
