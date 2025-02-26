import axios from 'axios'
import { useEffect } from 'react'

const DB_URL = "http://localhost:3000"

function App() {

  // delete an employee

  const deleteEmpByID = async (id) => {
    const deletedEmp = await axios.delete(`${DB_URL}/employees/${id}`)
    console.log(deletedEmp.data)
  }

  // all employees

  const getAllEmps = async () => {
    const response = await axios.get(DB_URL + "/employees")
    console.log(response.data)
  }

  useEffect(() => {

    getAllEmps()

    deleteEmpByID("438")

  }, [])

  return (
    <>
      <div>

    
      </div>

    </>
  );
}

export default App;
