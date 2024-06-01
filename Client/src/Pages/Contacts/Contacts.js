import React, { useRef } from 'react'
import { useState } from 'react'
export default function Contacts() {
  // const [contactUsForm,setcontactUsForm] = useState({
  //   email: "",
  //   message:"",
  // })
  const email = useRef("");
  const message = useRef("");
  const ContactUs =(event)=>{
      event.preventDefault();
      console.log(email.current.value);//هنا ممكن نعمل ال اباى الى هيبعت الداتا للباك اند 
      console.log(message.current.value);

  }

  return (
    <div style={{ fontWeight: "1000", color: "gray", fontFamily: "monospace", textAlign: "center" }}>
      <h1>Contacts Us</h1>
      <form onSubmit={ContactUs}>
        {/* email */}
        <div>
          <label htmlFor={"email"}>Email</label>
          <input id='email' type='email'
          required
          ref={email} p
          // value={contactUsForm.email}  
          // onChange={(event)=>{setcontactUsForm({...contactUsForm,
          // email: event.target.value})}} 
          />
        </div>
        <br />
        {/* message */}

        <div> 
          <label htmlFor={"message"}>meassage</label>
          <textarea id="message" rows={"5"}
          required
          ref={message} 
          // value={contactUsForm.message}  
          // onChange={(event)=>{setcontactUsForm({...contactUsForm, message: event.target.value})}}
          >Message</textarea>
        </div>
        <button style={{ fontWeight: "1000", color: "gray", fontFamily: "monospace", textAlign: "center", marginBottom:"20px" }} >Submit</button>
      </form>
    </div>
  )
}
