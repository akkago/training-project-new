import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import AlertDialog from '../AlertDialog/AlertDialog';

export default function ArticleView(props) {
    const { article } = props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = function () {
        setOpen(true);
    }
    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div>
            <div>
                {article.title}
            </div>
            <div>
                {article.date}
            </div>
            <div>
                {article.text}
            </div>
            <IconButton color="primary" aria-label="delete picture" component="label" onClick={handleClickOpen}>
                {/* <input hidden accept="image/*" type="file" /> */}
                <DeleteIcon />
            </IconButton>

            <AlertDialog
                open={open}
                onClose={handleClose}
                setOpen={handleClickOpen}
            />
        </div>
    );
}