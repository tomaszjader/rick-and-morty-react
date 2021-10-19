import './App.css';
import { useEffect, useState } from 'react';


const App = () => {
   const [data, setData] = useState([]);
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
  }, []);
  const data1 = data;
  const listItems = data1.map((d,index=0) => {
    return (
      <>
        <li key={d.image}>
          {d.name} , {d.status}, {d.species}, {d.type ? d.type : "no type"},
          {d.gender}, {d.created}
          <img src={d.image} alt={d.name} />
        </li>
      </>
    );
   
  });
  return (
    <div >
      <ul  className="conteiner">
        {listItems}
      </ul>
    </div>
  );
}

export default App;
