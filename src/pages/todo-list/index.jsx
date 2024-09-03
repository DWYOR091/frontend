import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_todo, remove_todo } from "../../redux/todo/slices";

export default function Todo() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  //redux
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const simpan = () => {
    dispatch(add_todo(input));
    setInput("");
  };

  const hapus = (indexDelete) => {
    dispatch(remove_todo(indexDelete));
  };
  return (
    <div>
      <h1>Daftar Todo</h1>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={simpan}>Simpan</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => hapus(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
