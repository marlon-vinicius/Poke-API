import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>      
      <div className="pokedex-grid">
        {pokemons && pokemons.map((pokemon, index) => {
          return (
            <Pokemon key={index}  pokemon={pokemon}/>
          );
        })}
      </div>
      
    </div>
  );
};

export default Pokedex;
