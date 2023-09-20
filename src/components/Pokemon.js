import React from "react";

const Pokemon = (props) => {
    
    const {pokemon} = props;

    if (!pokemon) {
        return <div>Não foi encontrado nenhum pokémon com esse nome</div>;
    }

    return (
    <div className="pokemon-card">
        <div className="pokemon-image-container">
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3> {pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="pokemon-type">
                {pokemon.types.map((type, index) => {
                    return (
                        <div key={index} className={`pokemon-${type.type.name}-text`}>{type.type.name}</div>
                    )
                })}
            </div>
            <div>Peso: {pokemon.weight / 10}kg</div>
            <div>Altura: {pokemon.height / 10}m</div>
        </div>
    </div>)
}

export default Pokemon;