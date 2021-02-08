// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props)=>{

    // const {chars} = props;

    return(
        <characterStyle>   
                 <div className="character-container">
        <div className="character-info">
          <div>
            <h3>Name: {props.character.name}</h3>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>HairColor: {props.character.hair_color}</p>
            <p>BirthYear: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Species: {props.character.species}</p>
          </div>
        </div>
      </div></characterStyle>)}

const characterStyle = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
align-content: center; 
justify-items: center;
justify-content: center;
border: 5px solid black;
background-color: #daeaff;
width: 1000px;
padding: 10px;
padding-top: 0px;
padding-bottom: 50%;
margin: 0 auto;
margin-bottom: 20px;
margin-top: 10px;

h3 {
    font-size: 50px;
    font-weight: bold;
    background-color: black;
    width: 102%;
    margin-top: 0px;
    color: #08889a;
}
p {
    font-size: 25px;
    font-family: sans-serif:
    font-weight: bold;
    margin-top: 0%;
}`

export default Character;

