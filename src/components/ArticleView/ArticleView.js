import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogTitle, IconButton, Typography } from '@mui/material';
import AlertDialog from '../AlertDialog/AlertDialog';
import Link from '@mui/material/Link';
import './ArticleView.scss';
import moment from 'moment';
import 'moment/locale/ru';

export default function ArticleView(props) {
    const { article, href } = props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = function () {
        setOpen(true);
    }
    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div className='article-view'>
            <Link
                href={href}
                className='article-view'
                underline="none"
            >
                <div className='article-view__container'>
                    <div className='article-view__container-header'>
                        <Typography
                            className='article-view__title'
                            variant="h5"
                            gutterBottom
                        >
                            {article.title}
                        </Typography>
                        <Typography
                            className='article-view__date'
                            gutterBottom
                        >
                            {moment(article.date).locale("ru").format('DD MMMM YYYY')}
                        </Typography>
                    </div>

                    <div className='article-view__text'>
                        {article.text}
                    </div>
                </div>

                <AlertDialog
                    open={open}
                    onClose={handleClose}
                    setOpen={handleClickOpen}
                />
            </Link>
            <IconButton
                className='article-view__delete-button'
                color="primary"
                aria-label="delete picture"
                component="label"
                onClick={handleClickOpen}
            >
                <DeleteIcon />
            </IconButton>
        </div>

    );
}