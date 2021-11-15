import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';


const UserReview = () => {

    const { user } = useAuth();
    const reserveImg = "https://i.ibb.co/0jz6gHX/avatar.png";

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const newReviewData = {
            ...data,
            rating_person: user.displayName || "Anonymous User",
            rating_person_img: user.photoURL || reserveImg
        };
        console.log(newReviewData);
        axios.post('http://localhost:5000/reviews', newReviewData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your feedback has been sent');
                    reset();
                }
            })
    };

    return (
        <div>
            <h2>Give us a review:</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <span>Type a rating number (Between 1-5):</span>
                    </label>
                    <br />
                    <input {...register("rating", { min: 1, max: 5 })} />
                    <br />
                    <label>
                        <span>Your comment for us:</span>
                    </label>
                    <br />
                    <textarea {...register("comment", { required: true })} /> <br />
                    <input type="submit" />
                </form>
            </div>


        </div>
    );
};

export default UserReview;