import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../css/Dashboard.css"

const Random = (props) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/places/random")
            .then(res => {
                console.log(res.data);
                setRestaurants(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Looks like you're eating....</h1>

            <h1>{restaurants.restaurant}</h1>
        </div>
    )
}

export default Random