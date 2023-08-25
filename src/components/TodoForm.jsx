import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-inherit border-solid border-[1px] border-[#8758ff] py-2 px-4 mt-4 mb-8 w-[300px] text-white placeholder:text-[#ffffff4d]"
        value={todo}
        placeholder="What is the task today?"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        type="submit"
        className="bg-[#8758ff] text-white border-none p-[0.55rem] cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
