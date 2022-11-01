import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  useEffect(() => {
    fetch( "http://localhost:3001/pets")
    .then((r) => r.json())
    .then(setPets)
  }, [])

  console.log(pets)
function handleAdoptPet(id) {
  const updatedPets = pets.map((pet) =>{
    return pet.id ===id ? {...pet, isAdopted: true} : pet
  })
  setPets(updatedPets)
}

  const filteredPets = filters === "all" ? pets : pets.filter((pet) => pet.type === filters)
  
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filters={filters} setFilters ={setFilters}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={filteredPets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
