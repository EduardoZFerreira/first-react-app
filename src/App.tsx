import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Paris"];
  let names = ["Abner", "Bbner", "Cbner", "Dbner"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <ListGroup items={names} heading="Abner" />
    </div>
  );
}

export default App;
