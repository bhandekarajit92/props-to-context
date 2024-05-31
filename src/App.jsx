import { useState } from "react";
import BgChanger from "./components/BgChanger";
import PasswordGenerator from "./components/Passwordgenerator";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const [counter, setCounter] = useState(15);

  return (
    <>
      {/* <h1 className="bg-red-300">Lets get Started</h1>
      <button>Increament:{counter} </button>
      <button>Decreament:{counter}</button> */}
      {/* <PasswordGenerator /> */}
      {/* <BgChanger /> */}
      {/* <CurrencyConverter /> */}
    </>
  );
}

export default App;
