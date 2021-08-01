import Task from "./Task";

function Tasks({ tasks, onClick, onDoubleClick }) {
    return (
        <>
            {tasks.map((task) => {
                return (
                    <Task
                        key={task.id}
                        task={task}
                        onClick={onClick}
                        onDoubleClick={onDoubleClick}
                    />
                );
            })}
        </>
    );
}

export default Tasks;
