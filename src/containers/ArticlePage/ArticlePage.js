import { Button, Typography } from "@mui/material";
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './ArticlePage.scss';

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

function ArticlePage() {
    return (
        <div>
            <Typography
                variant="h6"
                gutterBottom
            >
                Заголовок
            </Typography>
            <Typography>
                02 октября, 23:59
            </Typography>
            <Avatar>
                H
            </Avatar>
            <Typography>
                Сергей Глазьев , академик РАН
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
            >
                Содержание
            </Typography>
            {/* <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
        </div>
    );
}

export default ArticlePage;
