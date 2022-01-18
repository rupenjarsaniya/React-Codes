import React, { useState } from "react";
import Images from "./Images";

const Search = () => {
  const [search, setSearch] = useState("");
  const searching = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="searchbox">
        <input
          type="text"
          name="search"
          placeholder="Search Image"
          onChange={searching}
          value={search}
        />
      </div>
      {search === "" ? "" : <Images image={search} />}
    </>
  );
};

export default Search;
