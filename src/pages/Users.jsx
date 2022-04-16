import { useState, useEffect } from 'react';
import { User } from '../components';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const fetchData = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await fetchData.json();

      setUsers(data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  return (
    <div className='container my-4'>
      <h4>
        Fetching an array of 10 dummy users. Each user is an object
        with a lot of personal data which shows up on click.
      </h4>
      <h5>
        Fetched from:{' '}
        <code>https://jsonplaceholder.typicode.com/users</code>
      </h5>

      <div className='list-group mt-3'>
        {users.map((user) => (
          <User user={user} loading={loading} />
        ))}
      </div>
    </div>
  );
}

export default Users;
