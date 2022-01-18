import React from "react";
import List from "./List";

const Container = (props) => {
  return (
    <>
      <div className="container">
        <h2>Your Todos List</h2>
        <div className="todos">
          {props.list.map((element, index) => {
            return (
              <>
                <List
                  key={index}
                  id={index}
                  element={element}
                  deleteList={props.deleteList}
                  editList={props.editList}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Container;
