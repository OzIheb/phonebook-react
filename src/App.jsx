import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
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

  const filter = (event) => {
    const query = event.target.value;
    let filteredList = [...persons];
    console.log("the list is ", filteredList);
    filteredList = filteredList.filter((person) => {
      return person.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setPersons(filteredList);
  };

  return (
    <div>
      <h2>phonebook</h2>
      <div>
        Filter shown with a <input type="text" onChange={filter} />
      </div>
      <h2>Add a new number</h2>
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
