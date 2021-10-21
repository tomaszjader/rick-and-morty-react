import "./App.css";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Character = (props) => {
  return (
    <li key={props.id} className="list" >
      <ul className="list--style">
        <li className="list--header">{props.d.name}</li>
        <li className={props.d.status === "Alive" ? "alive" : "dead"}>
          {props.d.status}
        </li>
        <li>{props.d.species}</li>
        <li>{props.d.type ? props.d.type : "no type"}</li>
        <li>{props.d.gender}</li>
        <li>{props.d.created}</li>
      </ul>
      <img
        className="image"
        key={props.d.image}
        src={props.d.image}
        alt={props.d.name}
      />
    </li>
  );
}

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isScroling, setIsScroling] = useState(true);
  

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
  const fetchMoreData = () => {
    if (page === 34) {
      setIsScroling(false);
      return;
    }
    const req = new XMLHttpRequest();
    req.open(
      "GET",
      `https://rickandmortyapi.com/api/character/?page=${page}`,
      true
    );
    req.send();
    req.onload = () => {
      if (req.status === 200) {
        const myresponseText = JSON.parse(req.responseText);
        console.log(myresponseText);
        const results = myresponseText.results;
        const tmpData = data;
        setData(tmpData.concat(results));
        setPage(page + 1);
      }
    };
  };
  
  
  return (
    <div>
      <div className="serch">
        <input
          className="serch-input"
          type="text"
          placeholder="Give the name of the character:"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <ul>
        <InfiniteScroll
          className="conteiner"
          dataLength={data.length}
          next={() => fetchMoreData()}
          hasMore={isScroling}
          loader={<h4>Loading...</h4>}
        >
          {data
            .filter((d) => {
              if (search === "") {
                return d;
              } else if (d.name.toLowerCase().includes(search.toLowerCase())) {
                return d;
              }
            })
            .map((d, id) => {
              if (id === d.length - 1) {
                return <Character key={id} id={id} d={d} />;
              }
              return <Character key={id} id={id} d={d} />;
            })}
        </InfiniteScroll>
      </ul>
    </div>
  );
};

export default App;
