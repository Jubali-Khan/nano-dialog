import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import MainContent from './MainContent';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{ m: 0, p: 2, fontSize: 'smaller', fontWeight: 'bold' }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function DialogWindow() {
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  console.log('activeButton: ', activeButton);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/*  */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      {/*  */}
      {/*  */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/*  */}
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Änderungen anfordern
        </BootstrapDialogTitle>
        {/*  */}
        {/*  */}
        <DialogContent>
          <MainContent
            videoSource=""
            videoAlt=""
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </DialogContent>
        {/*  */}
        {/*  */}
        <DialogActions>
          {activeButton ? (
            <Button autoFocus onClick={handleClose}>
              Feedback senden
            </Button>
          ) : (
            <Button
              autoFocus
              onClick={handleClose}
              disabled
              sx={{ backgroundColor: 'lightgray' }}
            >
              Feedback senden
            </Button>
          )}
        </DialogActions>
        {/*  */}
      </BootstrapDialog>
      {/*  */}
    </div>
  );
}
