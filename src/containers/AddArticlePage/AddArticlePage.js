import { Button, Typography } from "@mui/material";
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './AddArticlePage.scss';

function AddArticlePage() {
    return (
        <div>
            <Box
                className='add-article-page'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='add-article-page__item'>
                    <Typography
                        variant="h6"
                        gutterBottom
                    >
                        Заголовок
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                    />
                </div>
                <div className='add-article-page__item'>
                    <Typography
                        variant="h6"
                        gutterBottom
                    >
                        Содержание
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        multiline
                        rows={40}
                    />
                </div>
                <div className='add-article-page__item'>
                    <Button
                        variant="contained"
                        className='article-page__save-button'
                    >
                        Сохранить
                    </Button>
                    <Button variant="outlined">
                        Отмена
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default AddArticlePage;
