import React from 'react'
import '../../Styles/ManageProduct.css'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
export default function ManageProduct() {
  return (
    <div className='mange-movies p-5'>
      <div className='header d-flex justify-content-between mb-5'>
      <h1 className='text-center mb-3'>Manage Movies</h1>
      <Link  to={"add"} className='btn btn-success'>Add New Movie</Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>IMG</th>
            <th>Movie Name</th>
            <th> Discription</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td><img src="http://picsum.photos/200"  class="rounded-3" style={{width: "100px"}} alt="Avatar" /></td>
            <td>Black Adam</td>
            <td>alsdfjbskejbakcjbewoufbsckjdebjseofskdejfbw</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
              <Link className='btn btn-success mx-1'>Update</Link>
              <Link className='btn btn-info'>Show</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td><img src="http://picsum.photos/200"  class="rounded-3" style={{width: "100px"}} alt="Avatar" /></td>
            <td>Kong</td>
            <td>alsdfjbskejbakcjbewoufbsckjdebjseofskdejfbw</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
              <Link className='btn btn-success mx-1'>Update</Link>
              <Link className='btn btn-info'>Show</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
