import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Button, TextField, TextareaAutosize } from '@mui/material';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_2cs8od6', form.current, 'dSgJh36b-64n40_h0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      
    
  return (
//     <form ref={form} onSubmit={sendEmail}>
//     <label>Name</label>
//     <input type="text" name="user_name" />
//     <label>Email</label>
//     <input type="email" name="user_email" />
//     <label>Message</label>
//     <textarea name="message" />
//     <input type="submit" value="Send" />
//   </form>
<>

<h1 style={{textAlign:'center'}}>CONTACT PAGE</h1>
<form ref={form} onSubmit={sendEmail} style={{display:'flex', flexDirection:'column', width:'30%', margin:'0 auto'}}>
      
      <TextField type='text' name='name'  id="outlined-basic" label="name" variant="outlined" /> <br/>
      <TextField type='email' name='email'  id="outlined-basic" label="title" variant="outlined" /><br/>
      <TextareaAutosize  name="message"/><br/>
      <TextField type='file' name="file"/>
      <Button variant='contained' color='success' type="submit" value="Send">Send</Button>
    </form>
</>
  )
}

export default Contact