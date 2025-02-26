import { useState } from 'react'

function App() {

  const [users, setUsers] = useState(["Mustafa", "Aygün", "Bengü", "Bilge"])

  const handleUsers = () => {
    setUsers([...users, "Ayhan"])
  }

  return (
    <>
      <div>

        {users.map((user, id) => (
          <div key={id}>User name: {user}</div>
        ))}
    
      </div>

      <div>
        <button onClick={handleUsers}>Add a new user</button>
      </div>

    </>
  );
}

export default App;
