import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [aboutPokemon, setAboutPokemon] = useState({
    pokemon_id: "NULL",
    pokemon_name: "NULL",
    pokemon_moves: "NULL",
    pokemon_weight: "NULL",
  });

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonres = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const pokemon_id = pokemonres.data.id;
      const pokemon_name = pokemonres.data.name;
      const pokemon_moves = pokemonres.data.moves.length;
      const pokemon_weight = pokemonres.data.weight;
      setAboutPokemon({
        pokemon_id,
        pokemon_name,
        pokemon_moves,
        pokemon_weight,
      });
    };
    getPokemon();
  }, [pokemon]);

  return (
    <>
      <div className="main">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="container">
              <h1 className="heading">welcome to pokemon</h1>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                numquam quaerat id provident molestias, quibusdam culpa non
                laborum pariatur vitae, ut suscipit illo fugiat magni molestiae
                voluptatibus necessitatibus, debitis accusantium. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nulla accusantium
                provident tenetur. Animi, praesentium blanditiis dolorum ipsam
                officiis beatae magnam?
              </p>
              <select
                className="select"
                onChange={(e) => setPokemon(e.target.value)}
                value={pokemon}
              >
                <option selected>Select Number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <div className="table_container">
                <h4 className="pokemoninfo">Pokemon Information</h4>
                <table className="table">
                  <tr>
                    <th>ID</th>
                    <td>{aboutPokemon.pokemon_id}</td>
                  </tr>
                  <tr>
                    <th>Pokemon Name</th>
                    <td>{aboutPokemon.pokemon_name}</td>
                  </tr>
                  <tr>
                    <th>Moves</th>
                    <td>{aboutPokemon.pokemon_moves}</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>{aboutPokemon.pokemon_weight}</td>
                  </tr>
                </table>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="other_info">
              <p className="other_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                voluptatem architecto quibusdam necessitatibus corrupti alias
                natus ducimus, ut aliquam id illum unde? Reprehenderit fugiat
                dolorem praesentium dolor vero excepturi corrupti natus maiores
                consequatur nam nostrum sapiente iure qui dolore illo, quisquam
                rerum delectus! Similique tempora delectus ea rem rerum
                sint?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, aperiam!
              </p>
              <p className="other_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                voluptatem architecto quibusdam necessitatibus corrupti alias
                natus ducimus, ut aliquam id illum unde? Reprehenderit fugiat
                dolorem praesentium dolor vero excepturi corrupti natus maiores
                consequatur nam nostrum sapiente iure qui dolore illo, quisquam
                rerum delectus! Similique tempora delectus ea rem rerum sint?
              </p>
              <p className="other_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                voluptatem architecto quibusdam necessitatibus corrupti alias
                natus ducimus, ut aliquam id illum unde? Reprehenderit fugiat
                dolorem praesentium dolor vero excepturi corrupti natus maiores
                consequatur nam nostrum sapiente iure qui dolore illo, quisquam
                rerum delectus! Similique tempora delectus ea rem rerum sint?
              </p>
              <Button variant="contained" className="btn">
                Read More
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Pokemon;
