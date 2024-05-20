import React, { useState } from 'react';
import axios from 'axios';

export default function Listtask() {
    
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [services, setServices] = useState('');
    const [timing, setTiming] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:3001/customers',
        {Name:name,Location:location,Services:services,Timing:timing})
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
            
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> <br></br>
                <label>Location: </label>
                <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} /><br></br>
                <label>Services Description</label>
                <textarea value={services} onChange={(e) => setServices(e.target.value)}></textarea><br></br>
                <label>Timing</label>
                <select value={timing} onChange={(e) => setTiming(e.target.value)}>
                    <option value='9am-6pm'>9am-6pm</option>
                    <option value='6pm-8pm'>6pm-8pm</option>
                </select>
                <br></br>
                <button type='button' onClick={handleSubmit}>SUBMIT</button>
            </form>
        </>
    );
}
