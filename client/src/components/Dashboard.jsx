import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../css/Dashboard.css"
import { Link } from 'react-router-dom';

const Dashboard = (props) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/places")
            .then(res => {
                console.log(res.data);
                setRestaurants(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    // Delete
    const deleteRes = (deleteId) => {
        // console.log(deleteId);
        axios.delete("http://localhost:8000/api/places/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("DELETE SUCCESS");

                // remove from the dom after successful delete
                setRestaurants(restaurants.filter((restaurant) => restaurant._id !== deleteId));
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='backGround'>
            <h2>Click below to find out where you're eating tonight</h2>
            <Link to={"/places/random"}><button className='button button-1'>RANDOM</button></Link>
            <h3>All your favorite restaurants over time</h3>
            {
                restaurants.map((restaurant) => {
                    return (
                        <div className='restuarantDisplay' key={restaurant._id}>
                            <div>
                                <Link className='yourRes'to={"/restaurants/" + restaurant._id}>
                                    <h5 className='yourRes'>{restaurant.restaurant}</h5>
                                </Link>
                            </div>
                            <div>
                                <Link to={"/update/" + restaurant._id}><button className='button2 button-2'>Edit</button></Link>
                                <button className='button2 button-2' onClick={() => deleteRes(restaurant._id)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard