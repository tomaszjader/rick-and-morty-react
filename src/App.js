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
  const listItems = data1.map((d,index) => {
    return (
      <li key={index} className="list">
        <ul className="list--style">
          <li className="list--header">{d.name}</li>
          <li className={d.status === "Alive" ? "alive" : "dead"}>
            {d.status}
          </li>
          <li>{d.species}</li>
          <li>{d.type ? d.type : "no type"}</li>
          <li>{d.gender}</li>
          <li>{d.created}</li>
        </ul>
        <img className="image" key={d.image} src={d.image} alt={d.name} />
      </li>
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
