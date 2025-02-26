import { useState } from 'react'

function App() {

  const [show, setShow] = useState(false)

  const data = {"name": "Mustafa Büyükdereli", "id": "4298"}

  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
      <div>

        {show ? <div>User name: {data.name} and user ID: {data.id}</div> : <div>Unknown person...</div>}

      </div>

      <div>
        <button onClick={handleShow}>Show Person Data</button>
      </div>

    </>
  );
}

export default App;
