import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
    let [name , setName] = useState()
    let [id , setId] = useState()
    let [age , setAge] = useState()
    let[grade,setGrade]=useState()
    let[gender,setGender]=useState()
    let[Email,setEmail]=useState()
    let demo  = (e) => {
     e.preventDefault()
     let payload = {name , id , age,grade,gender,Email}
     console.log(payload);
     axios.post("http://localhost:8081/users/",payload)
     .then((res) => {
           console.log(res);

     })

    }

  return (
    <div>
        <form action="">
                    name : <input type="text" name="" id="" onChange={(e) => {setName(e.target.value)}} />
                    <br />
                    id  : <input type="number" name="" id="" onChange={(e) => {setId(e.target.value)}} />
                    <br />
                    age : <input type="number" name="" id="" onChange={(e) => {setAge(e.target.value)}} />
                    <br />
                    grade : <input type="text" name="" id="" onChange={(e) => {setGrade(e.target.value)}} />
                    <br/>
                    gender : <input type="text" name="" id="" onChange={(e) => {setGender(e.target.value)}} />
                    <br/>
                    Email : <input type="text" name="" id="" onChange={(e) => {setEmail(e.target.value)}} /> 
                    <br/>
            <button onClick={demo}>submit</button>
            <br />
            <button> <Link to="/">back to home</Link> </button>
        </form>
    </div>
  )
}

export default Create
