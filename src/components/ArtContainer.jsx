export default function ArtContainer({ flipped, image, onSelect, title }) {
  return (
    <button onClick={onSelect} className="border">
      <div className="relative">
        <img src={image} className={`${flipped ? "invisible" : ""}`} />
        {flipped && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h3>{title}</h3>
          </div>
        )}
      </div>
    </button>
  );
}
