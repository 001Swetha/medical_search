import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Medical search</h1>

      <form>
        <p>Medicine name:</p>
        <input type="text" />
        <p>Component 1:</p>
        <input type="text" />
        <p>Component 2:</p>
        <input type="text" />
        <p>Component 3:</p>
        <input type="text" />
        <p>Component 4:</p>
        <input type="text" />
      </form>
      <p></p>
      <button type="submit" form="nameform" value="Submit">
        Save
      </button>
      <h1>Search Medicine</h1>
      <p></p>
      <p>search components</p>
      <input type="text" placeholder="Search.." />
    </div>
  );
}
