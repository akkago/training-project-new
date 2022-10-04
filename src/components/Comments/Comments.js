import { Button, IconButton, Typography } from "@mui/material";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './Comments.scss';

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { PhotoCamera } from "@mui/icons-material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Comment from "../Comment/Comment";
import mock from "../../mock/mock";
import AddComment from "../AddComment/AddComment";

function Comments() {
    const [visible, setVisible] = useState(false);

    const showComments = function () {
        setVisible(!visible);
    }

    const comments = mock.comments.map((c) => (
        <Comment
            user={c.user}
            text={c.text}
        />
    ));

    return (
        <>
            <Button
                endIcon={visible ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />}
                onClick={showComments}
            >
                {visible ? 'Скрыть комментарии' : 'Показать комментарии'}
            </Button>
            <AddComment />
            <div>
                {comments}
            </div>
            {/* 
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
        </>
    );
}

export default Comments;
