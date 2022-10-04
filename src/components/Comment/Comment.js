import { Button, IconButton, Typography } from "@mui/material";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './Comment.scss';

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { PhotoCamera } from "@mui/icons-material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function Comment(props) {
    const { user, text } = props;

    return (
        <div className="comment">
            <div className="comment__author">
                <Avatar>H</Avatar>
                <Typography>
                    {user}
                </Typography>
            </div>
            <Typography>
                {text}
            </Typography>
        </div>
    );
}

export default Comment;
