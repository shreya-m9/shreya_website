import { useState } from "react";
import temp1 from "../assets/headshot-2-temp.jpeg";
import temp2 from "../assets/headshot-temp.jpeg";
import ArtContainer from "./ArtContainer.jsx";

const ARTWORK = {
  1: {
    img: temp1,
    title: "title",
  },
  2: {
    img: temp2,
    title: "title",
  },
};

export default function Art() {
  const [flipped, setFlipped] = useState(null);

  function handleSelect(key) {
    setFlipped(flipped === key ? null : key);
  }

  return (
    <div>
      <h2 className="pb-2">art</h2>
      <p className="pb-7"> here is a line about this section </p>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(ARTWORK).map(([key, value]) => (
          <div key={key}>
            <ArtContainer
              onSelect={() => handleSelect(key)}
              image={value.img}
              flipped={flipped === key}
              title={value.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
