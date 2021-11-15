import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Motor = (props) => {
    const { img, model, price, _id, description } = props.motor

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: '200px', height: '100px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        Model: {model}
                    </Typography>
                    <Typography variant="h5">
                        Description: {description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Price: {price}
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', backgroundColor: 'green', color: 'whitesmoke' }} to={`/motors/${_id}`} >
                        Buy Now
                    </NavLink>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Motor;