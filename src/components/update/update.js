import React , {useState} from 'react';
import {Form,Button} from "semantic-ui-react";
import { useState } from "react";
import axios from 'axios';

export default function Update() {

    const [ID , setID] = useState('');
    const [userID , setUserID] = useState('');
    const [title, setTitle] = useState('');
    const [body , setBody] = useState('');

    console.log(ID);
    console.log(userID);
    console.log(title);
    console.log(body);

    const sendDataToAPI = () =>{
        axios.post('https://gorest.co.in/public/v2/posts' , {
            ID,
            userID,
            title,
            body
        })
    }

  return (
    <div>
          <Form>
    <Form.Field>
      <label>ID</label>
      <input name="id" 
      onChange={(e) => setID(e.target.value)} 
      placeholder='ID' />
    </Form.Field>
    <Form.Field>
      <label>User ID</label>
      <input name="userId"
      onChange={(e) => setUserID(e.target.value)} 
      placeholder='User ID' />
    </Form.Field>
    <Form.Field>
      <label>Title</label>
      <input 
      name="title"
      onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Body</label>
      <input 
      name="body"
      onChange={(e) => setBody(e.target.value)} placeholder='Body' />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI}>Update</Button>
  </Form>
    </div>
  )
}
