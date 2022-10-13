import React from "react";
import data from "./data";
import Card from "./Card";
const Cards = () => {
  function demo(value) {
    return (
      <>
        <Card
          imgsrc={value.src}
          title={value.title}
          year={value.year}
          distributor={value.distributor}
          amount={value.amount}
          ranking={value.ranking}
        />
      </>
    );
  }
  return (
    <>
      <div className="main_heading">
        <h2>MOVIE LIST</h2>
      </div>
      {data.map(demo)}
    </>
  );
};

export default Cards;

