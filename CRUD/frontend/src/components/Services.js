import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Services() {
    
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [services, setServices] = useState('');
    const [timing, setTiming] = useState('');
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3003/service/post',
        {name:name,location:location,services:services,timing:timing})
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
            navigate('/Admin')
    }

    return (
        <div className='service-bg'>
        <div className='services'>
            <form onSubmit={handleSubmit}>
                <label>Name: </label><br></br>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> <br></br>
                <label>Location: </label><br></br>
                <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} /><br></br>
                <label>Services Description</label><br></br>
                <textarea value={services} onChange={(e) => setServices(e.target.value)}></textarea><br></br>
                <label>Timing </label>
                <select value={timing} onChange={(e) => setTiming(e.target.value)}>
                    <option value='9am-6pm'>9am-6pm</option>
                    <option value='6pm-8pm'>6pm-8pm</option>
                </select>
                <br></br>
                <button className='butt'type='button' onClick={handleSubmit}>SUBMIT</button>
            </form>
      </div>
        </div>
    );
}

