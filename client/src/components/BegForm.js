import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


const BegForm = () => {


    const [name, setName] = useState('');
    const[carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');
    const [year, setYear] = useState('');
    const [trackDays,setTrackDays] = useState('');
    const [description,setDescription] = useState('');
    const [errors, setErrors] = useState({})
    
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault()


            axios.post('http://localhost:8000/api/users/create', 
            {   
                name,
                carMake,
                carModel,
                year,
                trackDays,
                description

            })
        .then((res) =>{
            navigate('/events/:id')
        })
        .catch((err) =>{
            console.log(err)
        })
    
}

  return (
    <div className='container'>
        <div className='header text-start d-flex justify-content-between p-5'>
            <div className='text-white'>
                <h1>Join the Race! </h1>
            </div>
            <div >
                <Link to ={'/'} className='text-danger'> Back to Main page</Link> 
                <br></br>
                <Link to ={'/events/:id'} className='text-danger'> Back to Last page</Link>
            </div>
        </div>
        
        <div className='bg-warning'>
            <form onSubmit={submitHandler}>
                <div className='formContainer'>
                    <div className='left'>
                        <div>
                            <label>Name:</label><br></br>
                            <input type = "text" onChange = {(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Car Make:</label><br></br>
                            <input type = "text" onChange = {(e) => setCarMake(e.target.value)}/>
                        </div>
                        <div>
                            <label>Car Model:</label><br></br>
                            <input type = "text" onChange = {(e) => setCarModel(e.target.value)}/>
                        </div>
                        <div>
                            <label>Year:</label><br></br>
                            <input type = "text" onChange = {(e) => setYear(e.target.value)}/>
                        </div>
                        <div>
                            <label>Number of Track Days Attended:</label><br></br>
                            <input type = "text" onChange = {(e) => setTrackDays(e.target.value)}/>
                        </div>
                        <div>
                            <label>Description:</label><br></br>
                            <textarea rows="4" cols="50"onChange = {(e) => setDescription(e.target.value)}/>
                        </div>
                        <br></br>
                         <button onSubmit={submitHandler} className='bg-primary text-white'>Add Event</button> 
                       
                    </div>
                       
                </div>
            </form>
        </div>
    </div>
  )
}

export default BegForm