
import React, { useState, useEffect } from 'react';

// ✅ Custom Hook in the same file
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic fetch with minimal handling
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// ✅ Component using the hook (was UserList)
export default function App() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h2>User List</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
