import { useState } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import Tasks from "./components/Tasks";

function App() {
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Something!",
            day: "1/9/2022",
            reminder: true,
        },
        {
            id: 2,
            text: "Something new!",
            day: "23/3/2021",
            reminder: true,
        },
        {
            id: 3,
            text: "Something new new!",
            day: "12/6/2021",
            reminder: true,
        },
    ]);

    // Add Task
    function addTask(task) {
        const id = Math.floor(Math.random() * 1000000000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    }

    // Remove Task
    function removeTask(id) {
        setTasks(
            tasks.filter((task) => {
                return id !== task.id;
            })
        );
    }

    // Toggle Reminder
    function toggleReminder(id) {
        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, reminder: !task.reminder }
                    : task;
            })
        );
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card container w-600">
                <Header
                    title="Task Tracker"
                    onAdd={() => {
                        setShowAddTaskForm(!showAddTaskForm);
                    }}
                    showForm={showAddTaskForm}
                />
                {showAddTaskForm && <AddTaskForm onSubmit={addTask} />}
                {tasks.length ? (
                    <Tasks
                        tasks={tasks}
                        onClick={removeTask}
                        onDoubleClick={toggleReminder}
                    />
                ) : (
                    <h4 className="text-muted font-weight-light">
                        "Hooray! No tasks!"
                    </h4>
                )}
            </div>
        </div>
    );
}

export default App;
