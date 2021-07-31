import Task from "./Task";

function Tasks({ tasks, onClick }) {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onClick={onClick} />;
      })}
    </>
  );
}

export default Tasks;
