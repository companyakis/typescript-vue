import { useEffect, useState } from "react";

function App() {

  const [year, setYear] = useState(2025)

  const [name, setName] = useState("Mustafa")

  useEffect(() => console.log("Always work!"))

  useEffect(() => console.log("First render worker!"), [])

  useEffect(() => console.log("First render and year change!"), [year])

  useEffect(() => console.log("First render and name change!"), [name])

  useEffect(() => console.log("Year, name..."), [year, name])

  return (
    <>

      <p>Year: {year}</p>

      <div><button onClick={() => setYear(year + 1)}>Year ++</button></div>

      <p>Name: {name}</p>

      <div><button onClick={() => setName("Mustafa Büyükdereli")}>Add LastName</button></div>

    </>
  );
}

export default App;
