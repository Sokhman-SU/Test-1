import React from "react";
import pokemon from "./pokemon.json";
import PropTypes from "prop-types";
import Select from 'react-select';

import "./App.css";

const PokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  "Program Network": PropTypes.string.isRequired,
  hometown: PropTypes.string.isRequired,
  "Number of Viewers": PropTypes.number.isRequired,
});

const PokemonRow = ({ pokemon }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.id}</td>
      <td>{pokemon.title}</td>
      <td>{pokemon.genre}</td>
      <td>{pokemon.hometown}</td>
    </tr>
  </>
);


const options = [
  { value: 'title', label: 'Title' },
  { value: 'Sports', label: 'Sports' },
];



function App() {
  const [network, setNetwork] = React.useState(null);

  const handleChange = (value) => {
    const network = value.value;
    setNetwork(network);
    console.log(network)
  };
  
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1em",
      }}
    >
      <h1 className="title">Tv Programing Dataset</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80% 20%",
          gridColumnGap: "1rem",
        }}
      >
        <div>
          <div className="filter">
            <Select
              onChange={handleChange}
              options={options}
            />
            
          </div>
        <table width="100%">
        <tbody>
        <p>{network}</p>
              {pokemon.map((pokemon) => (
                  <tr key={pokemon.id}>
                    <td>{pokemon.id}</td>
                    <td>{pokemon.title}</td>
                    <td>{pokemon.genre}</td>
                    <td>{pokemon.hometown}</td>
                 </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
