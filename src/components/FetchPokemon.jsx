import React, {useState} from "react";



const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokeWithThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(response => {
            return response.json();
        })

        .then(responseJson => {
            // console.log(jsonResponse)
            setPokemon(responseJson.results)
            // console.log(pokemon.results[0].name)
        })

        .catch(err => {
            console.log(err)
        })

        // const pokeArr = pokemon.results[0].name
        // console.log(pokeArr)
    }

    return (
        <div>
            <h1>Fetch Poke!</h1>
            <button onClick={fetchPokeWithThen}>Poke .then</button>
            <ul>
                {pokemon.map((yourPoke, idx) => 
                    <li key={idx}>{yourPoke.name}</li>
                )}
            </ul>
        </div>
    )
}
export default FetchPokemon