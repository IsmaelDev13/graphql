import logo from "./logo.svg";
import "./App.css";
import { Persons } from "./Persons";
import { PersonForm } from "./PersonForm";
import { usePerson } from "./Persons/customHooks";
import { useState } from "react";
import { Notify } from "./Notify";
import { PhoneForm } from "./PhoneForm";

function App() {
  const { data, error, loading } = usePerson();
  const [errorMessage, setErrorMessage] = useState(null);
  const notifyError = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 5000);
  };
  return (
    <div className="App">
      <Notify errorMessage={errorMessage} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? <p>Loading</p> : <Persons persons={data?.allPersons} />}
        <PhoneForm />
        <PersonForm notifyError={notifyError} />
      </header>
    </div>
  );
}

export default App;
