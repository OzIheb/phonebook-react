import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personServices from "./services/people";
import axious from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  useEffect(() => {
    personServices.getAll().then((initialResponse) => {
      setPersons(initialResponse);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    console.log("new name", newName);
    const newPerson = {
      name: newName,
      number: newNum,
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
      personServices.update(newPerson).then((returnedPerson) => {
        console.log("the returned person is", returnedPerson);
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNum("");
      });
    } else alert(`${newName} is already added to the phonebook`);
  };
  const displayPersons = persons.map((person) => {
    return (
      <div>
        {person.name} {person.number}
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
      <Filter Filterfunc={filter} />
      <h2>Add a new number</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        updatePersons={updatePersons}
        newNum={newNum}
        updateNum={updateNum}
      />
      <h2>Numbers</h2>
      <Persons displayPersons={displayPersons} />
    </div>
  );
};

export default App;
