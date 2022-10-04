import { Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Navigation from '../../Navigation';

export default function AddArticleViewButton(props) {
    const { className } = props;

    return (
        <div className={className}>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                href={Navigation.AddArticle}
            >
                Добавить статью
            </Button>
        </div>
    );
}