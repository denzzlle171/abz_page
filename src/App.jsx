import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header.jsx';
import { BannerSection } from './components/BanneSection/BannerSection.jsx';
import { UserList } from './components/UserList/UserList.jsx';
import { Form } from './components/Form/Form.jsx';

function App() {
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
    <div className="page">
      <Header />
      <BannerSection />
      <UserList
        users={users}
        loading={loading}
        showMoreUsers={showMoreUsers}
        page={page}
        totalpage={totalpage}
      />
      <Form
        setUsers={setUsers}
        setLoading={setLoading}
        setPage={setPage} />
    </div>
  );
}

export default App;
