import React, { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("API call for:", search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div>
      <h2>Search Users</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default App;
