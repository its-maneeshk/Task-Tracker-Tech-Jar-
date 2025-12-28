export default function TaskSearch({ search, setSearch }) {
  return (
    <input
      className="border p-2 flex-1"
      placeholder="Search tasks here..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}
