import axios from 'axios';
import { useState, useEffect } from 'react';
import Karakter from './components/Karakter';

const App = () => {
  const [karakters, setKarakters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect (() => {
  axios.get('https://swapi.dev/api/people/')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setLoading(false);
    setError(false);
    setKarakters(response.data);
  })
  .catch(function (error) {
    // handle error
    setLoading(false);
    setError(error);
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
},[])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {loading && <p>........LOADING.......</p>}
      <h1 className="Header">Characters</h1>
      {karakters.length > 0 && karakters.map((character) => {return <Karakter character={character} />
      })}
      {error && <p>!ERROR! : {error.message}{error.code} </p> }
    </div>
  );
}

export default App;

  /* karakterleri setKarakters(response.data) ile axiosa tanıttım, {karakters.map((character) => {return <div>{character.name}</div>})}
  ile çağırdım ve display */
  /* sonra loaing ve error ları tanımladım. axiosa da tanıttım. Aşağıya gittim loaing true ise bana loading yazısını göster dedim 
  şu şekilde => süslü parantez loading && <p>........LOADING.......</p> süslü parantez */
/* !loaing tamasa yani characters.length=o ise && => yazdır diyorum karakterler isimlerini ekrana tek tek listele*/
// error && <p>!ERROR!</p> ekledim. 
/* axios.then kısmında (data) ya eriştiyse internet, loading im false olcak(loaded olmuş oluyor yani), setLoading(false) de ekledim*/
/* şuan hata varsa da görmüyorum. gittim consoleda inceledim. axios.catch te setError(error) yazıp aşağıya da {error.message}{error.code} 
v aynı zamanda hata varsa loadingimin de bitmiş olması lazım o yüzden axis.catch e setLoading(false) ekledim. */
/* gidip karakter.js ini oluşturdum ve proplarını tanımladım. bu sayfaya  import ettikten sonra 
karakters.map((character) => {return <div>{character.name}</div>} return kısmını {return <Karakter character={character} /> olarak güncelledim */