export default function CharacterSearch() {
  return (
    <div className="join flex flex-row gap-2">
      <div>
        <input className="input join-item" placeholder="Search" />
      </div>
      <select className="select join-item">
        <option disabled selected>
          Filter
        </option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </select>
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">new</span>
        <button className="btn join-item">Search</button>
      </div>
    </div>
  );
}
