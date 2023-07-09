import { useState } from "react";
import classes from "./App.module.css";
import Form from "./components/Form/Form";
import Lists from "./components/Lists/Lists";
function App() {
  const [toDos, setToDos] = useState([]);
  const [doneToDos, setDoneToDos] = useState([]);
  const [toDosFilter, setToDosFilter] = useState("progress");
  const showList = toDos.length > 0 || doneToDos.length > 0;

  const addTaskHandler = (task, status) => {
    setToDos((prevToDos) => {
      return [
        { task, status, id: Math.random() * Math.random() },
        ...prevToDos,
      ];
    });
  };

  const deleteToDoHandler = (id) => {
    if (toDos.find((toDo) => toDo.id === id))
      return setToDos((prevToDos) => {
        return prevToDos.filter((toDo) => toDo.id !== id);
      });

    setDoneToDos((prevDoneToDos) => {
      return prevDoneToDos.filter((doneToDo) => doneToDo.id !== id);
    });
  };

  const changeStatusHandler = (id) => {
    setDoneToDos((prevDoneToDos) => {
      const done = toDos.find((todo) => todo.id === id);
      deleteToDoHandler(id);
      return [{ ...done, status: "done" }, ...prevDoneToDos];
    });
  };

  const changeFilterHandler = (status) => {
    return setToDosFilter(status);
  };

  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>MY TO DO LIST</header>
        <Form onAddTask={addTaskHandler}></Form>

        {showList && (
          <Lists
            onChangeFilter={changeFilterHandler}
            onChangeStatus={changeStatusHandler}
            onDeleteToDo={deleteToDoHandler}
            toDos={toDosFilter === "progress" ? toDos : doneToDos}
          ></Lists>
        )}
      </div>
    </>
  );
}

export default App;
