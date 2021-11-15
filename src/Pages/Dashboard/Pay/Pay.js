import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Pay = () => {
    return (
        <Typography style={{
            alignItems: 'center',
            flexWrap: 'wrap',
        }} component="div">
            <Box>Payment system coming soon.</Box>
            <Box sx={{ lineHeight: 2, m: 1 }}>Have a relax</Box>
        </Typography>
    );
};

export default Pay;