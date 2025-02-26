import axios from 'axios'
import { useEffect } from 'react'

const DB_URL = "http://localhost:3000"

function App() {

  // update an employee 

  const updateEmpByID = async(id, newValue) => {
    await axios.put(`${DB_URL}/employees/${id}`, newValue)
  }

  // all employees

  const getAllEmps = async () => {
    const response = await axios.get(DB_URL + "/employees")
    console.log(response.data)
  }

  useEffect(() => {

    getAllEmps()

    updateEmpByID("438", {
      "name": "Jale Cüce",
      "department": "Operations"
    })

  }, [])

  return (
    <>
      <div>

    
      </div>

    </>
  );
}

export default App;
