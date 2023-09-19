import React, { useState } from "react";
import { searchPokemon } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const onSearchHandler = async (pokemon) => {    
    const result = await searchPokemon(pokemon)   
    setPokemons([result])
  }
  return (
      <div>
        <Navbar />
        <Searchbar onSearch={onSearchHandler}/>
        <Pokedex
          pokemons={pokemons}
        />
      </div>
  );
}

export default App;
