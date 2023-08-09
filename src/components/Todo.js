import React from "react";

const ToDo = ({
  todo,
  index,
  editSave,
  tickTodo,
  handleeditName,
  Delete,
  seteditName,
  handleSave,
  add,
  editName,
}) => {
  return (
    <div
      key={todo.id}
      className="list-todo flex gap-[30px]  items-center justify-center mb-[20px]"
    >
      {editSave !== index ? (
        <div>
          <input
            type="checkbox"
            className="mr-2 items-center"
            onChange={() => tickTodo(index)}
            checked={todo.completed}
          />
          <span
            className={`text-lg ${
              todo.completed ? " text-green-500 font-bold" : ""
            }`}
          >
            {todo.todo}
          </span>
          <button
            className={` bg-yellow-500 font-bold py-2 px-4 rounded-[50px] ml-2 ${
              todo.completed ? "hidden" : " "
            }`}
            onClick={() => handleeditName(index)}
          >
            Edit
          </button>

          <button
            className=" bg-red-500 font-bold py-2 px-4 rounded-[50px] ml-2 "
            onClick={() => Delete(index)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={editName}
            onChange={(e) => seteditName(e.target.value)}
            className=" border rounded-[10px]"
          ></input>
          <button
            className="save font-medium text-white px-3 py-3 bg-green-500 ml-2 rounded-[10px]"
            onClick={() => handleSave(index)}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};
export default ToDo;
