import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  const handleClick = (event: MouseEvent, index: any) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              handleClick(event, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
