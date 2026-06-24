export default function ProjectTab({ title, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="flex w-20 h-10 border justify-center items-center"
    >
      <p className="text-xs">{title}</p>
    </button>
  );
}
