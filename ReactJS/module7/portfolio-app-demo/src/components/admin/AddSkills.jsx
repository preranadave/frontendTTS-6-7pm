
import React from 'react';
import { Container,Row} from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
export default function AddSkills() {
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
 
<h4 className='text-dark mt-5'>&nbsp;Add your Skills</h4>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Skills Name</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
</div>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Added date</label>
<input type="date" className="form-control" id="exampleFormControlInput1" placeholder="added date" />
</div>


<div className="mb-3">
<input type="submit" className="btn btn-lg btn-dark bg-dark text-white" value="AddSkills" id="exampleFormControlInput1" />

<input type="reset" className="btn btn-lg bg-danger text-white ms-4" value="Reset" id="exampleFormControlInput1" />

</div>



</div>
</Row>
    </Container>
    <AdminFooter />
    </div>
  )
}
