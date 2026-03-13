export default function CharacterCard() {
  return (
    <div className="hover-3d card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: Rick Sanchez</h2>

        <div className="flex flex-row gap-2">
          <h3>Status:</h3>
          <div className="flex flex-row gap-2">
            <div className="badge badge-soft badge-primary">Alive</div>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <h3>Species:</h3>
          <div className="flex flex-row gap-2">
            <div className="badge badge-soft badge-primary">Human</div>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <h3>Gender:</h3>
          <div className="flex flex-row gap-2">
            <div className="badge badge-soft badge-primary">Male</div>
          </div>
        </div>
      </div>
    </div>
  );
}
