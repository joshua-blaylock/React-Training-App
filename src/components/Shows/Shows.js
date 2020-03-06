import React from "react";
import data from "./../../data/shows.json"

function Shows() {
  return (
    <>
        {data.map((show,i)=>(
            <div key={i}>{show.name}</div>
        ))}
    </>
  );
}

export default Shows;