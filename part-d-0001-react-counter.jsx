import { useState } from 'react'

function App() {
  
  const [year, setYear] = useState(2025)

  function yearUp() {
    setYear(year + 1)
  }

  function yearDown() {
    setYear(year - 1)
  }

  return (
    <>

    <div>Year: {year}</div>

    <div>
      <button onClick={yearUp}>Year ++</button>

      <button onClick={yearDown}>Year --</button>
    </div>
      
    </>
  )
}

export default App
