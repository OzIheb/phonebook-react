import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", num: "94030342" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    console.log("new name", newName);
    const newPerson = {
      name: newName,
      num: newNum,
    };
    let checker;
    persons.every((person) => {
      if ((checker = person.name === newPerson.name)) {
        checker === true;
        return false;
      }
      return true;
    });
    if (checker === false) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNum("");
    } else alert(`${newName} is already added to the phonebook`);
  };
  const displayPersons = persons.map((person) => {
    return (
      <div>
        {person.name} {person.num}
      </div>
    );
  });
  const updatePersons = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const updateNum = (event) => {
    setNewNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={updatePersons} />{" "}
        </div>
        <div>
          number : <input value={newNum} onChange={updateNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {displayPersons}
    </div>
  );
};

export default App;
