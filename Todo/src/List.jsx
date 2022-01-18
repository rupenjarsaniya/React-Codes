import React from "react";

const List = (props) => {
  return (
    <>
      <div className="todos_container">
        <h3 className="todos_title">{props.element.title}</h3>
        <p className="todos_list">{props.element.content}</p>
        <div className="edit_container">
          <span className="delete" id="delete" title="Delete" onClick={() => props.deleteList(props.id)}>
            <i className="fa fa-trash"></i>
          </span>
          <span className="edit" id="edit" title="Edit" onClick={()=>props.editList(props.id)}>
            <i className="fa fa-edit"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default List;
