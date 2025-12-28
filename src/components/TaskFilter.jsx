export default function TaskFilter({ setStatusFilter }) {
  return (
    <select onChange={e => setStatusFilter(e.target.value)} className="border p-2">
      <option>All</option>
      <option>Pending</option>
      <option>Done</option>
    </select>
  );
}
