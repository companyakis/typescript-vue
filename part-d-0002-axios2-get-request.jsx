import axios from 'axios'
import { useEffect } from 'react'

const DB_URL = "http://localhost:3000"

function App() {

  // all employees

  const getAllEmps = async () => {
    const response = await axios.get(DB_URL + "/employees")
    console.log(response.data)
  }

  // an employee by ID

  const getEmpByID = async (id) => {
    const response = await axios.get(`${DB_URL}/employees/${id}`)
    console.log(response.data)
  }

  useEffect(() => {
    getAllEmps(),
    getEmpByID(132)
  }, [])

  return (
    <>
      <div>

    
      </div>

    </>
  );
}

export default App;
