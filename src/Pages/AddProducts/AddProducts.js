import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-refuge-31088.herokuapp.com/motors', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <label>Model:</label>
                <br />
                <input {...register("model")} />
                <br />
                <label>Description:</label>
                <br />
                <input  {...register("description")} />
                <br />
                <label>Price:</label>
                <br />
                <input {...register("price")} />
                <br />
                <br />
                <br />
                <input type="submit" value="ADD THIS PRODUCT" />
            </form>
        </div>
    );
};

export default AddProducts;