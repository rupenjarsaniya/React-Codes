import React from "react";
import Card from "./Cards";
import Disneymovies from "./Disneymovies";

const Disney = () => {
  return (
    <>
      {Disneymovies.map((element) => 
        <Card
          key={element.id}
          isec={element.isec}
          title={element.title}
          header={element.header}
          movie={element.web}
        />
      )}
    </>
  );
};

export default Disney;
