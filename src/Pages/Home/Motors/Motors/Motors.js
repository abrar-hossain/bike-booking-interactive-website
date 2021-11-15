import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMotors from '../../../../hooks/useMotors';
import Motor from '../Motor/Motor';

const Motors = () => {
    const { motors } = useMotors();
    const featureMotors = motors.slice(0, 6);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ textAlign: 'center', fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR BIKES
                </Typography>
                <Typography sx={{ textAlign: 'center', fontWeight: 600, m: 5 }} variant="h4" component="div">
                    BIKES We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        featureMotors.map(motor => <Motor
                            key={motor._id}
                            motor={motor}
                        ></Motor>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Motors;