import './App.css';
import { useEffect, useState } from 'react';


const App = () => {
   const [data, setData] = useState({});
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("GET", "https://rickandmortyapi.com/api/character", true);
    req.send();

    req.onload = () => {
      if (req.status === 200) {
        const myresponseText = JSON.parse(req.responseText);
        console.log(myresponseText);
        const results = myresponseText.results;
        setData(results);
      }
    };
  }, [data]);
  const data1 = [1, 2, 3, 4];
  const listItems = data1.map(d => <li>{d}</li>);
  return (
    <div className="App">
      <ol>
        {
          listItems
        }
      </ol>
    </div>
  );
}

export default App;
