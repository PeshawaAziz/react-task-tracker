import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Something!",
      day: new Date(2021, 6, 15).toLocaleDateString(),
      reminder: true,
    },
    {
      id: 2,
      text: "Something new!",
      day: new Date(2021, 3, 23).toLocaleDateString(),
      reminder: true,
    },
    {
      id: 3,
      text: "Something new new!",
      day: new Date(2021, 12, 2).toLocaleDateString(),
      reminder: true,
    },
  ]);

  function removeTask(id) {
    setTasks(
      tasks.filter((task) => {
        return id !== task.id;
      })
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card container w-600">
        <Header title="Task Tracker" />
        {tasks.length ? (
          <Tasks tasks={tasks} onClick={removeTask} />
        ) : (
          <h4 className="text-muted font-weight-light">"Hooray! No tasks!"</h4>
        )}
      </div>
    </div>
  );
}

export default App;
