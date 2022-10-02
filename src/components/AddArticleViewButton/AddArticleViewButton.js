import { Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function AddArticleViewButton() {
    return (
        <div>
            <Button variant="contained" startIcon={<AddIcon />}>Добавить статью</Button>
        </div>
    );
}