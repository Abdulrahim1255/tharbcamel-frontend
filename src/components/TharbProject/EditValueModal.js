import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditValueModal(props) {
    const [value,setValue] = React.useState("")

  return (
    <div>
     
      <Dialog
        open={props.open}
        onClose={()=>props.setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Edit Value
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description}
          </DialogContentText>
        <TextField className="my-3" fullWidth variant="outlined" id="outlined-basic" label="Enter Value" onChange={(e)=>setValue(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>props.setOpen(false)}>Cancel</Button>
          <Button disabled={value.length<=0?true:false} onClick={()=>props.handleSubmit(value)} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
