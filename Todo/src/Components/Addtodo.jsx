import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Addtodo = ({ addData }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /////////////////////////////////////////////////

  const [takeInputs, setTakeInputs] = useState({ title: "", desc: "" });
  const takeFun = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTakeInputs({ ...takeInputs, [name]: value });
  }

  const sendInputs = (e) => {
    e.preventDefault();
    { !takeInputs.title || !takeInputs.desc ? handleClickOpen() : addData(takeInputs.title, takeInputs.desc); setTakeInputs({ title: "", desc: "" }) }
  }
  return (
    <>
      <div className="input_container">
        <div className="inputs">
          <form method="post" className="myform">
            <input type="text" name="title" className="myinputs" placeholder="Title" autoComplete="off" required="required" onChange={takeFun} value={takeInputs.title} />
            <input type="text" name="desc" className="myinputs" placeholder="Write Something..." autoComplete="off" required="required" onChange={takeFun} value={takeInputs.desc} />
            <Button variant="contained" type="submit" className="btnadd" onClick={sendInputs}>Add</Button>
          </form>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Warning"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Field can not be empty <br />
              Please enter something, like make list of things
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Addtodo
