import { useEffect, useState } from "react";

const useMotors = () => {
    const [motors, setMotors] = useState([]);

    useEffect(() => {
        fetch("https://blooming-refuge-31088.herokuapp.com/motors")
            .then((res) => res.json())
            .then((data) => setMotors(data));
    }, []);

    return { motors };
};

export default useMotors;
