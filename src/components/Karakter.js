// Karakter bileşeniniz buraya gelecek
import React from "react";

const Karakter = (props) => {
 const {character} = props;
 return <div> {character.name} </div>
}

export default Karakter;

// fonks çalıştığında bir html div dönüyorsa o fonksiyona bileşen diyoruz. bunu gidip app.js e import ediyorum.
// {karakters.map((character) => {return <div>{character.name}</div>} satırını
//{karakters.length > 0 && karakters.map((character) => {return <Karakter character={character}/> satırı yaptım.