import React from "react"
import "./Pokecard.css";

const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends React.Component {
    
    render(){
      const pokemonObject = this.props.pokemonObject;
      let imgSrc= `${PokeAPI}${pokemonObject.id}.png`
    //   console.log('this is pokemonObject --->', this.props);
        return(<div>
          <div className="Pokecard">
            <h1>{pokemonObject.name}</h1>
            <img src={imgSrc} alt={this.props.name}/>
            <p>Type:{pokemonObject.type}</p>
            <p>EXP: {pokemonObject.base_experience}</p>
            </div>
        </div>)
    }
}

export default Pokecard