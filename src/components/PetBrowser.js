import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {

  const displayPets = pets.map((p) =>
    <Pet key={p.id} pet={p} onAdoptPet={onAdoptPet} />
  )
  return <div className="ui cards">{displayPets}</div>;
}

export default PetBrowser;
