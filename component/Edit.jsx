import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Edit = () => {
       let [name , setName] = useState()
        let [id , setId] = useState()
        let [age , setAge] = useState()
        let[grade,setGrade]=useState()
        let[gender,setGender]=useState()
        let[Email,setEmail]=useState()
        let {userid} = useParams()
        console.log(userid);

        // read data

        useEffect(() => {
           axios.get("http://localhost:8081/users/"+userid)
           .then((res) => {
            console.log(res);
            setName(res.data.name)
            setId(res.data.id)
            setAge(res.data.age)
            setGender(res.data.gender)
            setEmail(res.data.Email)

        
           })
        } , [])

        // edit

        let edit = (e) => {
            e.preventDefault()
            let payload = {name , id , age,grade,gender,Email}
            axios.put("http://localhost:8081/users/"+userid,payload)
            .then(() => {
                console.log("updated successfully");

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
                    <button onClick={edit}>submit</button>
                    <br />
                    <button> <Link to="/">back to home</Link> </button>
         </form>
    </div>
  )
}

export default Edit