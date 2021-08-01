import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import Tasks from "./components/Tasks";

function App() {
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function getData() {
            const serverTasks = await fetchTasks();
            setTasks(serverTasks);
        }
        getData();
    }, []);

    // Fetch Tasks
    async function fetchTasks() {
        const response = await fetch("http://localhost:5000/tasks");
        const data = await response.json();
        return data;
    }

    // Fetch Task
    async function fetchTask(id) {
        const response = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await response.json();
        return data;
    }

    // Add Task
    async function addTask(task) {
        const response = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(task),
        });
        const data = await response.json();

        setTasks([...tasks, data]);
    }

    // Remove Task
    async function removeTask(id) {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

        setTasks(
            tasks.filter((task) => {
                return id !== task.id;
            })
        );
    }

    // Toggle Reminder
    async function toggleReminder(id) {
        const taskToToggle = await fetchTask(id);
        const updatedTask = {
            ...taskToToggle,
            reminder: !taskToToggle.reminder,
        };
        const response = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        });
        const data = await response.json();

        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, reminder: data.reminder }
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
