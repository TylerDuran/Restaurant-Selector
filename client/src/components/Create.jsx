import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import "../css/Create.css"

const Create = (props) => {

  const [restaurant, setRestaurant] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const createRes = (e) => {
    e.preventDefault()

    const newRes = {
      restaurant
    }
    console.log(newRes);

    axios.post("http://localhost:8000/api/places", newRes)
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
      <form onSubmit={createRes}>
        {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
        Restaurant Name: <input onChange={(e) => setRestaurant(e.target.value)} value={restaurant} />
        <button>Add Restaurant</button>
      </form>
    </div>
  )
}

export default Create