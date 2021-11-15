import React from 'react';
import Rating from 'react-rating';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Reviewer = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://blooming-refuge-31088.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Typography style={{ textAlign: 'center' }} sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6">
                user Review
            </Typography>
            <Typography style={{ textAlign: 'center' }} sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6">
                Customers reviews for us
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            reviews.map(review => <Grid item xs={4} sm={4} md={4} key={review._id}>
                                <Card sx={{ minWidth: 275, border: 1, boxShadow: 0 }}>
                                    <CardMedia
                                        component="img"
                                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                                        image={review.rating_person_img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography style={{ textAlign: 'center' }} variant="h5">
                                            {review.rating_person}
                                        </Typography>
                                        <Rating
                                            initialRating={review.rating}
                                            emptySymbol="far fa-star fa-2x icon-color"
                                            fullSymbol="fas fa-star fa-2x icon-color"
                                            readonly
                                        ></Rating>
                                        <Typography style={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                                            {review.comment}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>)
                        }
                    </Grid>
                </Container>
            </Box>

        </div>
    );
};

export default Reviewer;

