import axios from 'axios'
import { useEffect } from 'react'

const DB_URL = "http://localhost:3000"

function App() {

  // add a new employee

  const addAnEmp = async (emp) => {
    await axios.post(`${DB_URL}/employees`, emp)
  }

  // all employees

  const getAllEmps = async () => {
    const response = await axios.get(DB_URL + "/employees")
    console.log(response.data)
  }


  useEffect(() => {
    getAllEmps()

    const empJale = {
      "id": "438",
      "name": "Jale Cüce",
      "department": "HR",
    }
    
    addAnEmp(empJale)

  }, [])

  return (
    <>
      <div>

    
      </div>

    </>
  );
}

export default App;
