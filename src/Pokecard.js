import React from "react"
import "./Pokecard.css";

// const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends React.Component {
    
    render(){
      const pokemonObject = this.props.pokemonObject;
      let imgSrc= `${POKE_API}${padToThree(pokemonObject.id)}.png`
    //   console.log('this is pokemonObject --->', this.props);
        return(<div>
          <div className="Pokecard">
            <h1 className="Pokecard-title">{pokemonObject.name}</h1>
            <img src={imgSrc} alt={this.props.name}/>
            <p className="Pokecard-data">Type:{pokemonObject.type}</p>
            <p className="Pokecard-data">EXP: {pokemonObject.base_experience}</p>
            </div>
        </div>)
    }
}

export default Pokecard