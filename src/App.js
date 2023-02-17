import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { React } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addToList = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Enter text");
    } else {
      setList([...list, input]);
      // console.log(list);
      setInput("");
    }
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const deleteValue = (element) => {
    // const filterNumber = list.indexOf(element);
    // console.log(filterNumber);
    const newValue = list.filter((number) => number !== element);
    setList(newValue);
  };
  return (
    <div className="container">
      <div className="row d-flex flex-row">
        <div className="border text-center rounded mt-4 mb-4 p-3 bg-dark text-light">
          <h2>Todo App</h2>
        </div>
        <div className="d-flex flex-row justify-content-between form">
          <label htmlFor="inputData" className="auto col-form-label">
            Input your data
          </label>
          <div className="col-8">
            <input
              onChange={handleInput}
              className="form-control"
              type="text"
              value={input}
              autoComplete="off"
              placeholder="Write Here"
              aria-label="default input example"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success col-2"
            onClick={addToList}
          >
            Add
          </button>
        </div>
      </div>
      <div className="row mt-5 ">
        {list.map((element, index) => (
          <div
            className="d-flex flex-row justify-content-between bg-light absolute pt-2 pb-2"
            key={index}
          >
            <p>{element}</p>
            <button
              type="button"
              id={index}
              className="btn btn-danger"
              onClick={() => deleteValue(element)}
            >
              remove
            </button>
          </div>
        ))}

        {/* {data.map((n) => (
            <p>n</p>
          ))} */}
      </div>
    </div>
  );
}

export default App;
