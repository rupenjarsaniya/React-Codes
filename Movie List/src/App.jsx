import React from "react";
import Header from "./Header";
import Amazon from "./Amazon";
import Disney from "./Disney";

let search = "amazon prime";

function App() {
  return (
    <>
      <Header />
      {search === "amazon prime"? <Amazon /> : <Disney />}
    </>
  );
}

export default App;
