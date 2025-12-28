import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import TaskSearch from "./components/TaskSearch";
import TaskSort from "./components/TaskSort";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const filteredTasks = tasks
    .filter(task =>
      statusFilter === "All" ? true : task.status === statusFilter
    )
    .filter(task =>
      task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.title.localeCompare(b.title);
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Task Tracker
        </h1>
        <p className="mt-2 text-gray-600">
          Add, edit, and manage your tasks efficiently in one place.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>

        <TaskForm setTasks={setTasks} />
        <div className="flex gap-2 my-4">
          <TaskSearch search={search} setSearch={setSearch} />
          <TaskSort setSortBy={setSortBy} />
          <TaskFilter setStatusFilter={setStatusFilter} />
        </div>

        <TaskList tasks={filteredTasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
