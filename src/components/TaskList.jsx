import TaskItem from "./TaskItem";

export default function TaskList({ tasks, setTasks }) {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}
