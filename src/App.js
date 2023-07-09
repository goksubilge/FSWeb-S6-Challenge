import axios from 'axios';
import { useState, useEffect } from 'react';
const App = () => {
  const [karakters, setKarakters] = useState([]);

useEffect (() => {
  axios.get('https://swapi.dev/api/people/')
  .then(function (response) {
    // handle success
    console.log(response);
    setKarakters(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {karakters.map((character) => {return <div>{character.name}</div>
      })}
    </div>
  );
}

export default App;
