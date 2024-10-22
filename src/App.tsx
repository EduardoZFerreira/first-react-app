import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "London", "Paris"];
  let names = ["Abner", "Bbner", "Cbner", "Dbner"];

  const [counter, setCounter] = useState(0);
  const [alertVisible, setAlertVisibility] = useState(false);

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

      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          The minimum count is 0
        </Alert>
      )}

      <h1>Counter: {counter}</h1>
      <Button
        color="success"
        onClick={() => {
          setAlertVisibility(false);
          setCounter(counter + 1);
        }}
      >
        Increase Count
      </Button>
      <Button
        color="danger"
        onClick={() => {
          if (counter > 0) {
            setAlertVisibility(false);
            setCounter(counter - 1);
          } else setAlertVisibility(true);
        }}
      >
        Decrease Count
      </Button>
    </div>
  );
}

export default App;
