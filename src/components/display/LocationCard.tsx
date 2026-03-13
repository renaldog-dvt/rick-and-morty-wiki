export default function LocationCard() {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">Location: Earth</h2>

        <div className="flex flex-row gap-2">
          <h3>Type:</h3>
          <div className="flex flex-row gap-2">
            <div className="badge badge-soft badge-primary">Planet</div>
          </div>
        </div>
      </div>
    </div>
  );
}
