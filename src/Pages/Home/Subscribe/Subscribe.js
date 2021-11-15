import Box from '@mui/material/Box';
import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <Box
            sx={{
                mx: "auto",
                my: 3,
                width: 300,
                height: 300,
                backgroundColor: '#f3e5f5',
            }}
            style={{ width: '75%', height: '200px' }}
        >
            <div className='subscribe'>

                <h1>LET'S STAY IN TOUCH
                </h1>
                <p>Get updates on Electric Bike
                </p>
                <div><input type="email" name="" id="" placeholder='Email' />
                    <button className="bike-btn-buy-now
                 ">Submit</button></div>



            </div>
        </Box>
    );
};

export default Subscribe;