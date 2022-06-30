import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "../css/DisplayOne.css"

const DisplayOne = (props) => {

    const { id } = useParams();
    console.log(id);

    const [thisRest, setThisRest] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/places/" + id)
            .then(res => {
                console.log(res.data);
                setThisRest(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            {
                thisRest ? (
                    <div className='displayOne'>
                        <h3>{thisRest.restaurant}</h3>
                    </div>
                ) : "Loading..."
            }
        </>
    )
}

export default DisplayOne