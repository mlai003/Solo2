import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Main = (props) => {

    const [list, setList] = useState([])

    useEffect(() =>{ 
        axios.get('http://localhost:8000/api/races')
        .then((res) =>{
            setList(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
       
    }, [])

    const deleteHandler = (raceId) =>{
        axios.delete(`http://localhost:8000/api/races/${raceId}`)
        .then((res) =>{
            const newList = list.filter((race) =>{
                return race._id !== raceId
            })
            setList(newList)
        })
        .catch((err) =>{
            console.log(err)
        })

    }

  return (
    <div className= 'container'>
        
        
        <div className='header text-start d-flex justify-content-between p-5'>
            <h1 className='text-center text-white'> Welcome to Track Day! </h1>
        </div>


    <table className='col-sm-12 bg-warning'>
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Address</th>
                <th>Date</th>
                <th>Created By</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
            list.map((race) =>{
                return(
                
                    <tr>
                        <td className='col-3'><Link to = {`/events/${race._id}`} >{race.eventName}</Link></td>
                        <td>{race.address}</td>
                        <td>{race.date}</td>
                        <td>{race.createdBy}</td>
                        <td>
                            <Link to = {`/events/edit/${race._id}`}><button>Edit Event</button> </Link> 
                            <button onClick = {()=>deleteHandler(race._id)}> Remove Event</button>
                        </td>
                        
                        
        
                        
                    </tr>
                        

        
                
                
            )})

        }
        </tbody>
        </table> 
        <br></br>
        <Link to = {'/addEvent'} className = 'text-primary'> Add an Event!</Link>
    </div>
   
   
    )
}

export default Main