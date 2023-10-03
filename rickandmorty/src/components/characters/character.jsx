import { useEffect, useState } from "react";

export const Character = () => {
  const [allCharacters, setAllCharacter] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setAllCharacter(data.results));
  }, []);

  return (
    <>
      <ul>
        {allCharacters.map((item, index) => (
          <>
            <img src={item.image} />
            <h4>{item.name}</h4>
            <p>{item.status}</p>
            <p>{item.species}</p>
            <p>{item.gender}</p>
          </>
        ))}
      </ul>
    </>
  );
};
