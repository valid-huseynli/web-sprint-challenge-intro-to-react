import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    
    .then((response) => {
       setCharacters(response.data.results)
       console.log(response);
      
    })
    .catch((error) => {
      console.log('Whoops!', error);
    })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <AppStyled>{characters && characters.map(character => {
 
 return <Character key = {character.id}
                      info = {characters}/>
   })}</AppStyled>
    </div>
  );
}
const AppStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default App;
