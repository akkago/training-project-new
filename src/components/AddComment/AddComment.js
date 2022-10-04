import { Button, IconButton, TextareaAutosize, Typography } from "@mui/material";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './AddComment.scss';

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { PhotoCamera } from "@mui/icons-material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function AddComment(props) {
    const { user, text } = props;

    return (
        <div className="add-comment">
            <div className='add-comment__item'>
                <Typography
                    variant="h6"
                    gutterBottom
                >
                    Пользователь
                </Typography>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className='add-comment__item'
                />
            </div>
            <div className='add-comment__item'>
                <TextareaAutosize
                    id="outlined-basic"
                    variant="outlined"
                    className='add-comment__item-content'
                    multiline
                />
            </div>

            <Button
                variant="contained"
                className='add-comment__button'
            >
                Добавить
            </Button>
        </div>
    );
}

export default AddComment;
