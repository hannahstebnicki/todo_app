import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

export default function ListItems(props) {
  const {
    items,
    setUpdate,
    deleteTask,
  } = props;

  const tasks = items.map(item => (
    <div className="list input-group mb-3" key={item.key}>
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          id={item.key}
          value={item.text}
          onChange={e => {
            setUpdate(e.target.value, item.key);
          }}
        />
      </div>
      <FontAwesomeIcon
        className="faicons row align-self-center"
        onClick={() => {
          deleteTask(item.key);
        }}
        icon="trash"
      />
    </div>
  ));

  return (
    <FlipMove duration={300} easing="ease-in-out">
      {tasks}
    </FlipMove>
  );
}
