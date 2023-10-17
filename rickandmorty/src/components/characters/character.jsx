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
      <h1>rickandmortyapi</h1>
      <ul className="contenedor">
        {allCharacters.map((item, index) => (
          <li className="item">
            <img src={item.image} />
            <div>
              <h4>{item.name}</h4>
              <p>
                {item.status}-{item.species}
              </p>
              <p>{item.gender}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
