import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
  }, [isClicked])

  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
        setPokemonList(response.data.results);
        setIsClicked(true);
      }).catch(err=>{
        console.log(err);
    });
    }

  return (
      <div className="App">
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        {isClicked && pokemonList.map((pokemon, index) => {
          return (<p key={index}>{pokemon.name}</p>)
        })}

      </div>
    );
  }

  export default App;
