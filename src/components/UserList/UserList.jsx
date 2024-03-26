import { useState, useEffect } from 'react';
import { Button } from '../Button/Button.jsx';
import { UserCard } from '../UserCard/UserCard.jsx'
import {Spinner} from '../Spinner/Spinner.jsx'
import './userList.css';


export const UserList = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalpage, setTotalpage] = useState(0);

  useEffect(() => {
    if (loading) {
      fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setUsers(
            users ? (prevUsers) => [...prevUsers, ...data.users] : data.users
          );

          setTotalpage(data.total_pages);
          setLoading(false);
       
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [page, loading, users]);

 const showMoreUsers = () => {
   setPage((prevPage) => prevPage + 1);
   setLoading(true);
 };
  
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
