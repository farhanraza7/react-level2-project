import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="all-cards">
        <div className="column">
          <div className="hover14">
            <img src={props.imgsrc} alt="moviepic" className="card-img-top" />{" "}
            <div className="card_info">
              <h3 id="demo01">
                {props.ranking}
                <h1 className="card_heading"> {props.title} </h1>
              </h3>
              <p className="year">{props.year}</p>
              <p className="card_distibutor">{props.distributor}</p>
              <p className="card_amount">{props.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
