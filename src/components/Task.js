function Task({ task, onClick }) {
  return (
    <div className="task border-right border-left rounded py-5 px-20 my-10 shadow-sm">
      <h3>
        {task.text}{" "}
        <i
          className="bi-x text-danger remove-icon"
          onClick={() => onClick(task.id)}
        ></i>
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
