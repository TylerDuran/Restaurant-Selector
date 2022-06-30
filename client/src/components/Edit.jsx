import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

const Edit = (props) => {

    const [restaurant, setRestaurant] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    // Get the data from the data base and put it in state to have pre filled input
    useEffect(() => {
        axios.get("http://localhost:8000/api/places/" + id)
            .then(res => {
                console.log(res.data);
                setRestaurant(res.data.restaurant)
            })
            .catch(err => console.log(err))
    }, [id])

    const updateRes = (e) => {
        e.preventDefault()

        const newRes = {
            restaurant
        }
        console.log(newRes);

        axios.put("http://localhost:8000/api/places/" + id, newRes)
            .then(res => {
                console.log(res.data);
                console.log("Client Succes");
                navigate("/restaurants");

            })
            .catch(err => {
                console.log("Client error");
                console.log(err.response.data.errors);

                // Validations 
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }

    return (
        <div>
            <form onSubmit={updateRes}>
                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
                Restaurant Name: <input onChange={(e) => setRestaurant(e.target.value)} value={restaurant} />
                <button>Add Restaurant</button>
            </form>
        </div>
    )
}
export default Edit