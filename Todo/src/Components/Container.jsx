import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Addtodo from './Addtodo';
import setTakeInputs from './Addtodo';

const editData = (element) => {
  console.log(element);
  
}

const Container = (props) => {
  return (
    <>
      <div className="container">
        <h2>Your Todos List</h2>
        <div className="todos">
          {props.todo == 0 ? <h6 style={{ color: "gray", marginTop: "2rem" }}>You don not have any todo</h6> :
            props.todo.map((element, key) => {
              return (
                <>
                  <div className="todos_container">
                    <h3 className="todos_title">{key + 1}. {element.title}</h3>
                    <h6 className="todos_list">{element.desc}</h6>
                    <div className="icons">
                      <IconButton aria-label="delete" className="delete" onClick={() => props.deleteData(element)}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton aria-label="edit" className="edit" onClick={() => editData(element)}>
                        <EditIcon />
                      </IconButton>
                      <a href="https://web.whatsapp.com/" target="_rj">
                        <IconButton aria-label="delete" className="share">
                          <WhatsAppIcon />
                        </IconButton>
                      </a>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Container;