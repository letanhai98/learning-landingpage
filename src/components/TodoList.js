import React, { useState, useEffect } from "react";
import ToDo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editName, seteditName] = useState("");
  const [editSave, seteditSave] = useState(null);
  const [newtodo, setnewToDo] = useState("");
  const [search, setSearch] = useState("");
  // const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data: ", data);
        data = data.todos;
        setTodos(data);
      });
  }, []);

  const handleToDo = (event) => {
    setnewToDo(event.target.value);
  };

  const addToDo = () => {
    const newTodo = { todo: newtodo, completed: false };
    setTodos([...todos, newTodo]);
    setnewToDo("");
  };

  const tickTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleeditName = (index) => {
    seteditSave(index);
    seteditName(todos[index].todo);
  };

  const Delete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleSave = (index) => {
    const newTodos = [...todos];
    newTodos[index].todo = editName;
    setTodos(newTodos);
    seteditName("");
    seteditSave(null);
  };

  const SearchToDo = () => {};

  return (
    <div className="todo flex justify-center items-center mt-[50px] flex-col">
      <h1 className="title font-bold text-[20px] mb-[50px]"> ToDo List</h1>
      <div className="add mb-[50px] flex gap-[20px]">
        <input
          type="text"
          value={newtodo}
          placeholder="Enter todo name"
          className=" rounded-[10px] border"
          onChange={handleToDo}
        />
        <button
          className="bg-green-500 font-bold py-2 px-4 rounded-[50px]
        "
          onClick={addToDo}
        >
          Add
        </button>
      </div>

      <div className="search mb-[20px] flex gap-5 items-center">
        <input
          type="text"
          value={search}
          placeholder="Search todo"
          className="rounded-[10px] border"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-green-500 font-bold py-2 px-4 rounded-[100%]"
          onClick={SearchToDo}
        >
          Search
        </button>
      </div>

      {todos.map((todo, index) => {
        return (
          <ToDo
            todo={todo}
            index={index}
            editSave={editSave}
            tickTodo={tickTodo}
            handleeditName={handleeditName}
            Delete={Delete}
            handleSave={handleSave}
            seteditName={seteditName}
            editName={editName}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
