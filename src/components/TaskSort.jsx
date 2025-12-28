export default function TaskSort({ setSortBy }) {
  return (
    <select onChange={e => setSortBy(e.target.value)} className="border p-2">
      <option value="date">Sort by Date</option>
      <option value="name">Sort by Name</option>
    </select>
  );
}
