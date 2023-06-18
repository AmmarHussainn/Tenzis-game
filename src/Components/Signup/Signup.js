import React, { useState } from 'react'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleChange = ()=>{
        setEmail(email)
    }

  
    console.log(email)


  return (
   <section>
    <h1> Sign up Form</h1>

    <input placeholder='ENTER your email'  value={email} onChange={handleChange}/>
    <input placeholder='"Enter youir password' value={password}/>
   </section>
  )
}

export default Signup