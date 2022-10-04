import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import BasicDateRangePicker from '../BasicDateRangePicker/BasicDateRangePicker';
import './SearchPanel.scss';

export default function SearchPanel() {
    return (
        <Box
            className='search-panel'
            component="form"
            // sx={{
            //     '& > :not(style)': { m: 1, width: '35ch' },
            // }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Поиск..."
                variant="outlined"
                className='search-panel__search-input'
            />
            <BasicDateRangePicker />
        </Box>
    );
}