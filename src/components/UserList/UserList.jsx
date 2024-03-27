import { Button } from '../Button/Button.jsx';
import { UserCard } from '../UserCard/UserCard.jsx'
import {Spinner} from '../Spinner/Spinner.jsx'
import './userList.scss';


export const UserList = ({ users, loading, showMoreUsers, page, totalpage }) => {
  return (
    <section className="users" id="users">
      <h2 className="users__title">Working with GET request</h2>
      <ul className="users__list">
        {users && users.map((user) => <UserCard key={user.id} user={user} />)}
      </ul>

      {loading && <Spinner />}

      <Button
        addClassName="users__btn"
        onClick={showMoreUsers}
        disabled={totalpage === page}
      >
        Show more
      </Button>
    </section>
  );
};
