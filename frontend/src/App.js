import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

const UNSPLAH_KEY=process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLAH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return (
    <div>
      <Header title="Gallery of Image From Unsplash"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;