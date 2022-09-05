import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


const Table = ({data}) => {
  return (
    <table className='mt-3 pt-3'>
      <tbody>
        <tr>
            <th>From:</th>
            <th>Going To:</th>
            <th>Bus Liner:</th>
            <th>Model:</th>
            <th>Bus Name:</th>
            <th>Rating:</th>
            <th>price:</th>
            <th></th> 
            <th>Image:</th> 
        </tr>
        {data.map((item)=> (
        <tr key={item.busName}>
            <td>{item.source}</td>
            <td>{item.destination}</td>
            <td>{item.busLiner}</td>
            <td>{item.model}</td>
            <td>{item.busName}</td>
            <td>{item.rating}</td>
            <td>{item.price}</td>
            <td><Link to={`/seat/${item.id}`} type='button' className="btn btn-primary">SELECT</Link></td>
            <td><img src={item.image} style={{width:"300px",height:"150px"}} alt="..."/></td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
