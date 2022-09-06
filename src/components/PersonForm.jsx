export default function PersonForm(props) {
  return (
    <div>
      <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.updatePersons} />{" "}
        </div>
        <div>
          number : <input value={props.newNum} onChange={props.updateNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}
