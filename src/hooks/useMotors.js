import { useEffect, useState } from "react";

const useMotors = () => {
    const [motors, setMotors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/motors")
            .then((res) => res.json())
            .then((data) => setMotors(data));
    }, []);

    return { motors };
};

export default useMotors;
