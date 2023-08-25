import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  faCircle,
  faCircleCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const Todo = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
  handleEditing,
}) => {
  const inputRef = useRef(null);
  const [task, setTask] = useState(todo.task);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      editTodo(todo.id, task);
      handleEditing(todo.id, false);
      inputRef.current.blur();
    } else if (event.key === "Escape") {
      handleEditing(todo.id, false);
      inputRef.current.blur();
    }
  };

  return (
    <div className="flex justify-between items-center bg-[#8758ff] text-white py-3 px-4 radius rounded-md mb-4">
      <input
        className={`bg-transparent border-none w-9/12 p-1 text-sm focus:bg-white  focus:outline-none focus:rounded-md ${
          todo.isEditing && "w-full"
        } ${todo.completed ? "text-[#c5aeff] line-through" : "text-black"}`}
        ref={inputRef}
        value={task}
        onChange={handleChange}
        onFocus={() => handleEditing(todo.id, true)}
        onBlur={() => {
          handleEditing(todo.id, false);
        }}
        onKeyDown={handleKeyDown}
      />
      {todo.isEditing ? (
        ""
      ) : (
        <div className="flex justify-center items-center gap-3">
          <FontAwesomeIcon
            className="cursor-pointer text-[18px]"
            icon={todo.completed ? faCircleCheck : faCircle}
            onClick={() => toggleComplete(todo.id)}
          />
          <FontAwesomeIcon
            className="cursor-pointer text-[18px]"
            icon={faPenToSquare}
            onClick={() => inputRef.current.focus()}
          />
          <FontAwesomeIcon
            className="cursor-pointer text-[18px]"
            icon={faTrash}
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      )}
    </div>
  );
};

export default Todo;
