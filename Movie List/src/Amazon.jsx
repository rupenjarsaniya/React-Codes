import React from "react";
import Cards from "./Cards";
import Amazonmovies from "./Amazonmovies";

const Amazon = () => {
  return (
    <>
      {Amazonmovies.map((element) => 
        <Cards
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

export default Amazon;
