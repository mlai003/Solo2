import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'




const Event = () => {

    const [begList, setBegList] = useState([])
    const [advList, setAdvList] = useState([])
    
   
    
    
    const {id} = useParams()
    console.log(id)

    useEffect(() =>{ 
        axios.get(`http://localhost:8000/api/users/`)
        .then((res) =>{
            let bList = res.data
            
            setBegList(bList.filter(b => b.trackDays < 3))
            setAdvList(bList.filter(b => b.trackDays >= 3))
        })
        .catch((err) =>{
            console.log(err)
        })
       
    }, [])


    return (
    <div className='container'>
        <div className='header text-start d-flex justify-content-between p-5'>
            
        
            <h1 className='text-white fw-bolder'> Welcome to TrackDay  </h1>
            <Link to = {'/'} className='text-danger'> Return to Home Page</Link>
          
        </div>
       
<div className='d-flex col-12'>

    <h2> </h2>
<div className='col-5  '>
    
    <h1>Beginner Group</h1>
    <table className='col-12'>
        <thead>
            <tr>
                <th>Driver Name</th>
                <th>Car</th>
            </tr>
        </thead>
        <tbody>
            {
            begList.map((user) =>{
                return(
                    
                    <tr>
                        <td className='col-6 text-white'><Link to = {`/events/users/${user._id}`} >{user.name}</Link></td>
                        <td>{user.year} {user.carMake} {user.carModel}</td>
                        <td></td>     
                    </tr>             
            )})

        }
        </tbody>
        </table>
        <br></br>
        <br></br>
            <Link to = {`/events/${id}/beginner`}><button className='bg-danger text-white align-center'>Join Race</button> </Link>  
            <p>*must have attended at least 3 track events to participate in advanced group</p>
        </div>
        
        
        <div className='col-8 '>
        <h1> Advanced Group</h1>


<table className='col-12'>
    <thead>
        <tr>
            <th>Driver Name</th>
            <th>Car</th>
        </tr>
    </thead>
    <tbody>
        {
        advList.map((user) =>{
            return(
            
                <tr>
                    <td className='col-6 font-weight-bold' ><Link to = {`/events/users/${user._id}`} >{user.name}</Link></td>
                    <td>{user.year} {user.carMake} {user.carModel}</td>   
                    
                </tr>             
        )})

    }
    </tbody>
    </table>
    <br></br>
    <br></br>
        
        </div>
        </div>
    </div>
    )
}

export default Event