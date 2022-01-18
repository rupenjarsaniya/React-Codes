import { Button } from "@material-ui/core";
import React, { useState, useEffect, createContext } from "react";

const App = () => {
  const [state, setState] = useState(0);
  const [stateprimary, setStateprimary] = useState(0);

  // useEffect run when page is loading or some connent was changed
  // useEffect(() => {
  //   window.alert("ok");
  // });

  // useEffect run when this array is change
  useEffect(() => {
    document.title =  state ;
  }, [state]);
  
  const Title = createContext();
  
  return (
    <>
      {/* You can not do that */}
      {/* <Button variant="contained" className="btn" onClick={()=>setState(state+1), ()=>{window.alert("ok")}}>Click {state}</Button> */}
      
      {/* You can do like that */}
      <Button variant="contained" className="btn" onClick={()=>setState(state+1)}>Click {state}</Button>
      <br />
      <Title.Provider value={state}></Title.Provider>
      <br />
      <Button variant="contained" className="btn" onClick={()=>setStateprimary(state+1)}>Click {stateprimary}</Button>
    </>
  );
};

export default App;
