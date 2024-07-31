
import React from 'react';
import { Container,Row} from 'react-bootstrap';
import Chart from 'react-google-charts';
// for chart library
//https://github.com/RakanNimer/react-google-charts
// npm install --save react-google-charts
export const data = [
  ["Task", "Hours per Day"],
  ["Total customers", 11],
  ["Total Reviews", 2],
  ["Total Menu", 2],
  ["Total Contacts", 2],
  ["Total Orders", 7],
];
export const options = {
  title: "My Daily Activities",
};

export default function AdminDashboard() {
  return (
    <div>
    <Row>
    <div className='col-md-3 ms-2 bg-dark p-2 mt-5'>
    <span className='text-white'>Total Customers</span>
    <span className='badge bg-danger p-1 ms-2'>5</span>
    </div>
    <div className='col-md-3 ms-2 bg-primary p-2 mt-5'>
    <span className='text-white'>Total Reviews</span>
    <span className='badge bg-danger p-1 ms-2'>2</span>
    </div>
    
    <div className='col-md-4 ms-2 bg-danger p-2 mt-5'>
    <span className='text-white'>Total Profile</span>
    <span className='badge bg-danger p-1 ms-2'>25</span>
    </div>

    <div className='col-md-3 ms-2 bg-warning p-2 mt-2'>
    <span className='text-white'>Total Menues</span>
    <span className='badge bg-danger p-1 ms-2'>5</span>
    </div>
    <div className='col-md-3 ms-2 bg-secondary p-2 mt-2'>
    <span className='text-white'>Total Contacts</span>
    <span className='badge bg-danger p-1 ms-2'>5</span></div>
    <div className='col-md-4 ms-2 bg-success p-2 mt-2'>
    <span className='text-white'>Total Customers</span>
    <span className='badge bg-danger p-1 ms-2'>5</span>
    </div>
    </Row>

    <Container className="m-0 p-3 ms-2 mt-3">
    <h4>We are on</h4>
    <hr className='border border-1 w-25' align='left' />
    <Row className='m-0 p-0 h-0'>
    <div className='col-md-3 ms-0 bg-warning p-3 mt-0'>
    <span className="bi bi-facebook fs-4 text-center text-white"></span>
    </div>
    <div className='col-md-3 ms-5 bg-secondary p-3 mt-0'>
     <span className="bi bi-twitter fs-4 text-center text-white"></span>
     </div>
    <div className='col-md-3 ms-5 bg-success p-3 mt-0'>
    <span className="bi bi-google fs-4 text-center text-white"></span>
    </div> 
   </Row>
   </Container>
   <Container className="p-3 ms-2 mt-0">
   <h4>Traffic</h4>
  
  <Chart chartType="PieChart" data={data} options={options} width={"100%"} height={"400px"} />

   </Container>

   </div>
  )
}
