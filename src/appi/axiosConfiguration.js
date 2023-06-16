import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../CSS/FetchedDataStyle.css'
import {Link} from 'react-router-dom'

function AxiosConfiguration() {
    const[data , setData] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
        try{
            const response = await axios.get('http://localhost:9092/student/getAll');
            setData(response.data);
        }
        catch(error){
            console.log('Error fetching data : ' , error);
        }
    };
    
    fetchData();
    } , []);



  return (
    <div >
        <ul>
            {data.map((item) => (
                <table>
                    <div key={item.id}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                        </tr>
                    </tbody>
                    </div>
                </table>
            ))}
        </ul>
    </div>
    
  )
}

export default AxiosConfiguration
