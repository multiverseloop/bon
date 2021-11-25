import React, { Component } from 'react';
import { useFormik } from 'formik'
import Button from '@mui/material/Button';


class Form extends React.Component {
    render() { 
        return (
        <div>
        <div><h2> <br/>{'   '}Before we start....</h2></div>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <form>
        
        <label htmlFor="email" style={{ display: "block" }}>
              Email
        </label>
        <input id="email"
              placeholder="Enter your email"
              type="text"/>
        <label htmlFor="Name" style={{ display: "block" }}>
              Name
        </label>
        <input id="name"
              placeholder="Enter your Name"
              type="text"/>
        <Button variant="contained">Contained</Button>
        </form>
        </div>

        </div>);
    }
}
 
export default Form ;