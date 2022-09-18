import React, {useEffect, useState} from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const OneUser = () => {

  const {id} = useParams()   
  const [user, setUser] = useState({})

  const navigate = useNavigate();

  useEffect(() =>{
    axios.get(`http://localhost:8000/api/users/${id}`)
        .then((res) => {
            setUser(res.data)
        })
        .catch((err) =>{
        console.log(err)
})
}, [])

  const deleteHandler = () =>{
    axios.delete(`http://localhost:8000/api/users/${id}`)
    .then((res) =>{
        navigate("/events/:id")
    })
    .catch((err) =>{
        console.log(err)
    })
  }



  return (
    <div className='container'>
        
        <div className='header text-start d-flex justify-content-between p-5'>
          <div className='text-danger'>
            <h1>Track Day!</h1>
            <h1 className='text-white'>Racers Profile: {user.name}</h1>
          </div>

          <div className ='px-5 text-danger '> 
              <Link to ={'/'} className = "text-danger"> back to home</Link> 
              <br></br>
              <Link to ={"/events/:id"} className = "text-danger"> back to last page</Link>
          </div>
         
        </div>
        
        <div className='bg-warning'>
            <h3>Car Make: {user.carMake}</h3> <br></br> 
            <h3>Car Model: {user.carModel}</h3> <br></br>
            <h3>Car Year: {user.year}</h3> <br></br>
            <h3>Number of track days attended: {user.trackDays}</h3> <br></br>
            <h3>Description:<p>{user.description}</p>  </h3>
            
            <div className= "bg-warning">
                <button className='delete bg-primary text-white' onClick={deleteHandler}>Remove {user.name} from Race </button>
            </div>
        </div>
    </div>

        
  )
}

export default OneUser