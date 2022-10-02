import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react';

export default function AlertDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose(false);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   Удалить статью?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Не удалять</Button>
                <Button onClick={handleClose} autoFocus>
                    Удалить
                </Button>
            </DialogActions>
        </Dialog>
    );
}