import "./App.css";
import React, { useEffect, useState, useRef, useCallback } from "react";

const Character = React.forwardRef((props, ref) => {
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
});

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [search, setSearch] = useState("");
  const lastItemRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef(null);

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
  const getMoreBeers = useCallback(() => {
    console.log("nnn")
    if (!page || !page.next || isLoading) return;
    setIsLoading(true);
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
        setData([...data, ...results]);
        setPage(page + 1);
        setIsLoading(false);
      }
    };
  }, [isLoading, data, page]);
  useEffect(() => {
    const options = {
      root: document,
      threshold: 0.75,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        getMoreBeers();
      }
    };
    observer.current = new IntersectionObserver(callback, options);
    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
    return () => {
      observer.current.disconnect();
    };
  }, [getMoreBeers]);
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
            if (id === d.length - 1) {
              return <Character key={d.name} id={id} d={d} ref={lastItemRef} />;
            }
            return <Character key={d.name} id={id} d={d} />;
          })}
      </ul>
    </div>
  );
};

export default App;
