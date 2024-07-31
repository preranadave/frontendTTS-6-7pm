
import React from 'react';
import { Container,Row} from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
export default function AddClient() {
  return (
    <div>
    <AdminHeader />
<Container fluid className="m-0 p-0">
<Row>
<div className='col-md-3 bg-secondary'>
<AdminSidebar />
</div>
<div className='col-md-8'>
{/* Ad Portfolio here here */}
 
<h4 className='text-dark mt-5'>&nbsp;Add Clients Reviews</h4>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Name</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
</div>
<div className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Photo</label>
<input type="file" className="form-control" id="exampleFormControlTextarea1" />
</div>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Email</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Mobile</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone *" />
</div>

<div className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Add Message</label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className="mb-3">
<input type="submit" className="btn btn-lg btn-dark bg-dark text-white" value="AddReviews" id="exampleFormControlInput1" />

<input type="reset" className="btn btn-lg bg-danger text-white ms-4" value="Reset" id="exampleFormControlInput1" />

</div>



</div>
</Row>
    </Container>
    <AdminFooter />
    </div>
  )
}
