
import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';

export default function BasicDemo() {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const [userData, setuserDataOptions] = useState([]);
  const [postData, setpostDataOptions] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseURL}/users`)
      .then((res) => {
        setuserDataOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get(`${baseURL}/posts`)
      .then((res) => {
        setpostDataOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },[postData]);
    const [selectedUser, setSelectedUser] = useState(userData[0]);
    const users = userData.map(user => user.name);
   //console.log("postdata",postData);
   const map1 = new Map();
        for (let x in postData) {
            map1.set(postData[x].userId, postData[x]);
        }
        //console.log("map1 : ",map1)

   var currentUserPost;
   
   
   
    //console.log("users : ",userData);

  return (
    <div className="card">
      {userData.length > 0 && ( // Render the Dropdown component only when userData has data
        <div className="card flex justify-content-center">
          <Dropdown
            value={selectedUser}
            onChange={(e) => {
              setSelectedUser(e.value)
             
            }
            }
            options={userData}
            optionLabel="name"
            editable
            placeholder="Select a User"
            className="w-full md:w-14rem"
          />
        </div>
      )}
      {selectedUser && (
  <Card style={{ background: '#cccccc88', border: '5px solid '}} title={selectedUser.name} border="10px">
    <p className="m-0" style={{ textAlign: 'left' }}>
      UserName: {selectedUser.username}
    </p>
    <p className="m-0" style={{ textAlign: 'left' }}>
      Email: {selectedUser.email}
    </p>
    <p className="m-0" style={{ textAlign: 'left' }}>
      Address: {JSON.stringify(selectedUser.address)}
    </p>
    <p className="m-0" style={{ textAlign: 'left' }}>
      Phone: {selectedUser.phone}
    </p>
    <p className="m-0" style={{ textAlign: 'left' }}>
      Website: {selectedUser.website}
    </p>
    <p className="m-0" style={{ textAlign: 'left' }}>
      Company: {JSON.stringify(selectedUser.company)}
    </p>
    <p className="m-0" style={{ textAlign: 'left' }}>
  Latest Post: <br/>{"Title: " + map1.get(selectedUser.id).title}<br />
  {"Body: " + map1.get(selectedUser.id).body}
</p>

  </Card>
)}

    </div>
  );
  
}
