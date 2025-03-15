import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Home = () => {
    let [state , setState] = useState([])
     useEffect(() => {
        axios.get("http://localhost:8081/users")
        .then((res) => {
             console.log(res.data);
             setState(res.data)

        })
     } , [])

    //  delete

    let delete1 = (id) => {
        axios.delete(`http://localhost:8081/users/${id}`)
        .then(() => {
            window.location.reload()
        })
    }
  return (
    <div>

<h3>Student Information</h3>
        <button> <Link to="/create">ADD</Link> </button>
        <table border="2px solid">
            
            <thead>
                <tr>
                    <th>name</th>
                    <th>id</th>
                    <th>age</th>
                    <th>grade</th>
                    <th>gender</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((res) => {
                       return (
                        <tr>
                            <td>{res.name}</td>
                            <td>{res.id}</td>
                            <td>{res.age}</td>
                            <td>{res.grade}</td>
                            <td>{res.gender}</td>
                            <td>{res.Email}</td>
                            <td>
                                <button onClick={() => {delete1(res.id)}} >Delete</button>
                                <button> <Link to={`/edit/${res.id}`}>Edit</Link> </button>
                            </td>
                        </tr>
                       )
                    })
                }
            </tbody>

        </table>
    </div>
  )
}

export default Home
