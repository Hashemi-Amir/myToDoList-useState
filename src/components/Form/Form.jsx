import { useState } from "react";
import classes from "./Form.module.css";
import PropTypes from "prop-types";

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

function Form({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  const changeInputHandler = (e) => {
    return setEnteredTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredTask.trim().length < 3) return;
    onAddTask(enteredTask, "Progress");
    setEnteredTask("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        value={enteredTask}
        onChange={changeInputHandler}
        type="text"
        placeholder="Enter your task..."
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
