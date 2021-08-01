function Task({ task, onClick, onDoubleClick }) {
    return (
        <div
            className={`task${
                task.reminder ? " reminder-on " : " reminder-off "
            }rounded py-5 px-20 my-10 shadow-lg`}
            onDoubleClick={() => {
                onDoubleClick(task.id);
            }}
        >
            <h3>
                {task.text}{" "}
                <i
                    className="bi-x text-danger remove-icon"
                    onClick={() => onClick(task.id)}
                ></i>
            </h3>
            <p className="text-muted">{task.day}</p>
        </div>
    );
}

export default Task;
