import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [motors, setMotors] = useState([]);
    useEffect(() => {
        fetch(`https://blooming-refuge-31088.herokuapp.com/motors/${id}`)
            .then(res => res.json())
            .then(data => setMotors(data));
    }, []);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-refuge-31088.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })

    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <img style={{ width: '300px', height: '300px' }} src={motors.img} alt="" />
                <h1>Model: {motors.model}</h1>
                <h5>Description: {motors.description}</h5>
                <h3>Price: {motors.price}</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Your Name:</label>
                    <br />
                    <input
                        {...register("name", { required: false, maxLength: 20 })}
                        value={user.displayName}
                    />
                    <br />
                    <label>Your Email:</label>
                    <br />
                    <input {...register("email")} value={user.email} />
                    <br />
                    <label>Model:</label>
                    <br />
                    <input {...register("model")} value={motors.model} />
                    <br />
                    <label>Price:</label>
                    <br />
                    <input {...register("price")} value={motors.price} />
                    <br />
                    <label>Address:</label>
                    <br />
                    <input {...register("address", { required: true, maxLength: 20 })} />
                    <br />
                    <br />
                    <input style={{ backgroundColor: 'green', color: 'white' }} type="submit" value='Buy confirm' />
                </form>
            </div>
        </Box>
    );
};

export default Purchase;