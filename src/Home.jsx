import React from 'react'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const users = useSelector((state)=>state.users)
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
   dispatch(deleteUser({id:id}))
  }
  return (
    <div className='container'>
      <h2 className='text-center mt-2 fw-bolder '> EMPLOYEE DETAILS</h2>
      <Link to="/create" className='btn btn-secondary my-3'>Create +</Link>
      <table class="table shadow ">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Designation</th>
      <th>Action</th>
    </tr>
  </thead>
  {
    users.length>0?<tbody>
    {
      users.map((user , index)=>(
        <tr key={index}>
        <td>{user.id}</td>
        <td className='fw-bolder'>{user.name}</td>
        <td>+91{user.contact}</td>
        <td style={{textAlign:'justify'}}>{user.desgn}</td>
        <td>
          <Link to={`/edit/${user.id}`} className='btn btn-sm btn-success'>Edit</Link>
          <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>

        </td>
        </tr>
      ))
    }
  </tbody> :
  <div style={{marginLeft:'260px'}} className='text-center d-flex flex-column'>
    <img className='text-center' style={{width:'75%',height:'350px'}} src="https://cdn4.iconfinder.com/data/icons/user-interface-131/32/sad_store-512.png" alt="" />
    <button className='btn btn-danger'>LIST IS EMPTY</button>
  </div>
  }
</table>
    </div>
  )
}

export default Home