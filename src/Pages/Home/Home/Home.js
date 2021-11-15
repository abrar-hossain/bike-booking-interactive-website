import React from 'react';
import Banner from '../Banner/Banner';
import Motors from '../Motors/Motors/Motors';
import Reviewer from '../Reviewer/Reviewer';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Motors></Motors>
            <Reviewer></Reviewer>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;