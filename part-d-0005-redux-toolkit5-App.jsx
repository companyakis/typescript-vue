import { useSelector, useDispatch } from "react-redux";
import {incrementBudget, decrementBudget,} from "./redux/budgetSlice"

function App() {

  const dispatch = useDispatch()

  const {budget} = useSelector((store) => store.budgetCounter)

  return (
    <>

      <div>{budget}</div>

      <div>
        <button onClick={() => dispatch(incrementBudget())}>Budget +</button>
        <button onClick={() => dispatch(decrementBudget())}>Budget -</button>
      </div>

    </>
  );
}

export default App;
