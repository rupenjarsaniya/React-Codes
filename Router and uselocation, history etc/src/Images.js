import React from "react";

const Images = (props) => {
  const img_link = `https://source.unsplash.com/1600x900/?${props.image}`;
  return (
    <>
      <div className="img">
        <div className="image">
          <img src={img_link} alt="search image" />
        </div>
      </div>
    </>
  );
};

export default Images;
