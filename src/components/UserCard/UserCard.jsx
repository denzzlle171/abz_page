import picture from '../../img/Vector.svg';
import './userCard.css';

export const UserCard = ({user}) => {
  return (
    <div className="usersCard">
      <img className="photo" src={user.photo || picture} alt="avatar" />
      <p className="name cardItem">{user.name}</p>
      <p className="position cardItem">{user.position}</p>
      <p className="mail cardItem">{user.email}</p>
      <p className="telephone cardItem">{user.phone}</p>
    </div>
  );
};
