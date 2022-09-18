import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, Link, useParams} from 'react-router-dom'

const EditRace = () => {
    

const {id} = useParams()

    const [eventName, setEventName] = useState('');
    const[address, setAddress] = useState('')
    const [date, setDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [errors, setErrors] = useState({})
    
    const navigate = useNavigate();


    useEffect(() =>{
        axios.get(`http://localhost:8000/api/races/${id}`)
          .then((res) =>{
            console.log("test")
            setEventName(res.data.eventName);
            setAddress(res.data.address);
            setDate(res.data.date);
            setEventTime(res.data.eventTime);
            setCreatedBy(res.data.createdBy);
                 
          })
          .catch((err) =>{
            console.log(err,'something went wrong')
          })
        }, [id])

    const editHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/races/${id}`, 
        {
            eventName,
            address,
            date,
            eventTime,
            createdBy,

        })
        .then((res) =>{
            navigate('/')
        })
        .catch((err) =>{
            console.log(err)
            setErrors(err.response.data.error.errors)
        })
    }

  return (
    <div className='container'>

        <div className='header text-start d-flex justify-content-between p-5'>
            <h1 className="text-white fw-bolder">Edit Your Race </h1>
            <Link to ={'/'}> Back to Main page</Link>
        </div>
            
        <div>    
            <div>
                <form onSubmit={editHandler}>
                    <div className='bg-warning'>
                        <div className='left'>
                        <div>
                            <label>Title:</label><br></br>
                            <input type = "text"  value = {eventName} onChange = {(e) => setEventName(e.target.value)}/>
                            {errors.eventName? <p>{errors.eventName.message}</p> : null}
                        </div>
                        <div>
                            <label>Address:</label><br></br>
                            <input type = "text" value = {address} onChange = {(e) => setAddress(e.target.value)}/>
                            {/* {errors.address? <p>{errors.address.message}</p> : null} */}
                        </div>
                        <div>
                            <label>Date:</label><br></br>
                            <input type = "date" value = {date} onChange = {(e) => setDate(e.target.value)}/>
                            {/* {errors.date? <p>{errors.date.message}</p> : null} */}
                        </div>
                        <div>
                            <label>Time:</label><br></br>
                            <input type = "text" value = {eventTime} onChange = {(e) => setEventTime(e.target.value)}/>
                            {/* {errors.eventTime? <p>{errors.eventTime.message}</p> : null} */}
                        </div>
                        <div>
                            <label>Hosted by:</label><br></br>
                            <input type = "text" value = {createdBy} onChange = {(e) => setCreatedBy(e.target.value)}/>
                            {/* {errors.createdBy? <p>{errors.createdBy.message}</p> : null} */}
                        </div>

                         <button onSubmit={editHandler}>Add Event</button> 
                       
                    </div>
                       
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default EditRace