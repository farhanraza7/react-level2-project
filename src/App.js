import Cards from "./Cards";
import data from "./data";
import "./styles.css";
function demo(value) {
  // function ncard(value) {
  //   ;
  // }
  return (
    <>
      {/* <h1 className="heading_style">MOVIE LIST</h1> */}
      {/* {Data.map(function ncard(value) {
        return ( */}
      <Cards
        imgsrc={value.src}
        title={value.title}
        year={value.year}
        distributor={value.distributor}
        amount={value.amount}
        ranking={value.ranking}
      />
      {/* })} */}
    </>
  );
}

// export default App;
export default function App() {
  return <>{data.map(demo)}</>;
}
