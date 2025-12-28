import { useState } from "react";

export default function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTask = () => {
    if (!title || !dueDate) return;

    setTasks(prev => [
      ...prev,
      { id: Date.now(), title, dueDate, status: "Pending" }
    ]);

    setTitle("");
    setDueDate("");
  };

  return (
    <div className="flex gap-2">
      <input
        className="border p-2 flex-1"
        placeholder="Enter Task Title here..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="border p-2"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-4">
        Add
      </button>
    </div>
  );
}
