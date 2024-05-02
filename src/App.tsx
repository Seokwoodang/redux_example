import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const response = {
    results: [
      { title: "lords of ring", id: 1 },
      { title: "hamlet", id: 2 },
      { title: "terminal", id: 3 },
    ],
  };

  let movies = response.results;

  // 검색
  function searchFunction(val = "") {
    movies = response.results.filter((value) => value.title.includes(val));
  }

  function searchFunctionReturn(val = "") {
    return response.results.filter((value) => value.title.includes(val));
  }

  // console.log(movies);
  console.log(searchFunctionReturn());

  let ref = "";

  searchFunctionReturn().forEach((value) => {
    ref = ref + `<div><img src={${value.id}}/></div>`;
  });

  const show = movies.map((value, index) => {
    return <div>{value.title}</div>;
  });

  /** 검색 함수 */
  // searchFunction();

  // console.log(results);

  return (
    <div>
      <button
        onClick={() => {
          searchFunction("ring");
          console.log(movies);
        }}
      >
        ㅁㅁㅁ
      </button>
      {show}
    </div>
  );
}

export default App;
