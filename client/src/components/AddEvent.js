import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const AddEvent = () => {


    const [eventName, setEventName] = useState('');
    const[address, setAddress] = useState('')
    const [date, setDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [errors, setErrors] = useState({})
    
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/races/create', 
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
        })
    }

  return (
    <div className='container-md-border'>

        <div className='header text-start d-flex justify-content-between p-5'>
            <h1 className='text-white text-bolder'>Add an Event</h1>
            <Link to ={'/'}> Back to Main page</Link>
        </div>
            
        
        <div>
            <form onSubmit={submitHandler}>
                <div className='bg-warning'>
                    <div className='left'>
                        <div>
                            <label>Title:</label><br></br>
                            <input type = "text" onChange = {(e) => setEventName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Address:</label><br></br>
                            <input type = "text" onChange = {(e) => setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label>Date:</label><br></br>
                            <input type = "text" onChange = {(e) => setDate(e.target.value)}/>
                        </div>
                        <div>
                            <label>Time:</label><br></br>
                            <input type = "text" onChange = {(e) => setEventTime(e.target.value)}/>
                        </div>
                        <div>
                            <label>Hosted by:</label><br></br>
                            <input type = "text" onChange = {(e) => setCreatedBy(e.target.value)}/>
                        </div>

                         <button onSubmit={submitHandler}>Add Event</button> 
                       
                    </div>
                       
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddEvent