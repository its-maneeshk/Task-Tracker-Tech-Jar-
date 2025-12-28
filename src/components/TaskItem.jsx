export default function TaskItem({ task, setTasks }) {
  const toggleStatus = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, status: t.status === "Pending" ? "Done" : "Pending" } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    <div className="flex justify-between items-center border p-2">
      <div>
        <p className="font-semibold">{task.title}</p>
        <p className="text-sm text-gray-500">{task.dueDate}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={toggleStatus}
          className="px-3 py-1 text-sm rounded text-white bg-blue-500 hover:bg-blue-600 transition">
          {task.status}
        </button>

        <button
          onClick={deleteTask}
          className="px-3 py-1 text-sm rounded text-white bg-red-500 hover:bg-red-600 transition">
          Delete
        </button>
      </div>

    </div>
  );
}
