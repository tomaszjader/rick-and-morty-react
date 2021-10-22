import "./App.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


const SimpleNavigation = (props) => {
  const fetchMoreData = (i) => {
    const req = new XMLHttpRequest();
    req.open(
      "GET",
      `https://rickandmortyapi.com/api/character/?page=${i}`,
      true
    );
    req.send();
    req.onload = () => {
      if (req.status === 200) {
        const myresponseText = JSON.parse(req.responseText);
        const results = myresponseText.results;

        props.setData(results);
      }
    };
  };
  return (
    <nav className="menu">
      <ul className="nav-bar">
        {props.curentPages.map((i) => {
          
          return (
            <li key={i} className="list-nav">
              <a href="#top" onClick={() => fetchMoreData(i)} > {i}  </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Character = (props) => {
  return (
    <li key={props.id} className="list">
      <ul className="list--style">
        <li className="list--header">{props.d.name}</li>
        <li className={props.d.status === "Alive" ? "alive" : "dead"}>
          {props.d.status}
        </li>
        <li>{props.d.species}</li>
        <li>{props.d.type ? props.d.type : "no type"}</li>
        <li>{props.d.gender}</li>
        <li>
          {props.d.created.slice(0, 10)} {props.d.created.slice(11, 16)}
        </li>
      </ul>
      <img
        className="image"
        key={props.d.image}
        src={props.d.image}
        alt={props.d.name}
      />
    </li>
  );
};

const App = () => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  const curentPages = Array.from({ length: 34 }, (_, i) => i + 1);

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

  return (
    <main >
      <div className="serch" id='top'>
        <input
          className="serch-input"
          type="text"
          placeholder="Give the name of the character:"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <ul className="conteiner">
        {data
          .filter((d) => {
            if (search === "") {
              return d;
            } else if (d.name.toLowerCase().includes(search.toLowerCase())) {
              return d;
            }
          })
          .map((d, id) => {
            return <Character key={id} id={id} d={d} />;
          })}
      </ul>
      <SimpleNavigation
        curentPages={curentPages}
        setData={setData}
      ></SimpleNavigation>
    </main>
  );
};

export default App;
