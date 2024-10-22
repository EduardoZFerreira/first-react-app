import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Paris"];
  let names = ["Abner", "Bbner", "Cbner", "Dbner"];

  const handleSelectCity = (item: string) => {
    if (item === "Paris") {
      window.open("https://www.youtube.com/watch?v=fbFnF-86eYs", "_blank");
    }
  };
  const handleSelectName = (item: string) => {
    if (item === "Abner") {
      window.open("https://www.youtube.com/watch?v=BsXKRwWsOnc", "_blank");
    }
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectCity}
      />
      <ListGroup
        items={names}
        heading="Abner"
        onSelectItem={handleSelectName}
      />

      <Alert>Alert</Alert>
    </div>
  );
}

export default App;
