import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Admin() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/customers')
      .then(res => {
        setList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="admin">
      <div className="admin-css">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {list.map(customer => (
            <div className="col" >
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Customer </h1>
                  <p>
                    <i>Name: {customer.name}</i><br />
                    <i>Location: {customer.location}</i><br />
                    <i>Services: {customer.services}</i><br />
                    <i>Timing: {customer.timing}</i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
