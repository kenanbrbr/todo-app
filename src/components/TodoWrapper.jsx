import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [animationParent] = useAutoAnimate();

  console.log("todos", todos[0]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (todoId) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const editTodo = (todoId, task) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === todoId ? { ...todo, task } : todo))
    );
  };

  const handleEditing = (todoId, value) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, isEditing: value } : todo
      )
    );
  };

  return (
    <div className="bg-[#1a1a40] mt-20 p-8 text-md" ref={animationParent}>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          handleEditing={handleEditing}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;
