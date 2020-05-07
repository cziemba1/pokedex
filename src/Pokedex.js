import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winner Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Loser Hand</h1>;
    }
    return (
      <div className="Pokedex">
        <p>{title}</p>
        <h2>Total Experience : {this.props.exp}</h2>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
