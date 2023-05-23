// import React from 'react';

import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Tabular = ({ t, toys, setToys }) => {
  const { _id, url, name, seller_name, sub_category, price, available, posted_by } = t;

  const HandleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`,
          {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log('Deleted', data)

            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Coffee has been deleted.',
                'success'
              )
              const remaining = toys.filter(o => o._id !== _id)
              setToys(remaining);
              console.log(remaining)
            }
          }
          )
      }
    })
  }
  return (


    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <img
            src={url}
            alt=''
            style={{ width: '55px', height: '55px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>{name} </p>

          </div>
        </div>
      </td>
      <td> <p className='fw-bold mb-1'>{posted_by} </p></td>
      <td>
        <p className='fw-normal mb-1'>{seller_name}</p>

      </td>
      <td>
        <p className='text-muted mb-0'>{sub_category}</p>
      </td>
      <td><p className='text-muted mb-0'>{price} BDT</p></td>
      <td><p className='text-muted mb-0'>{available}</p></td>
      <td>
        <Link to={`/ToyDetails/${_id}`}><MDBBtn size='sm'>
          View Details
        </MDBBtn></Link> &nbsp;
        <Link to={`/UpdateToy/${_id}`}><MDBBtn className="btn btn-warning" size='sm' >
          Update
        </MDBBtn></Link> &nbsp;
        <MDBBtn className="btn btn-danger" size='sm' onClick={() => HandleDelete(_id)}>
          Delete
        </MDBBtn>
        
      </td>

    </tr>



  );
};

export default Tabular;