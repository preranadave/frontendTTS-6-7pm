
import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div>


    <footer className="footer text-center">
        <div className="container">
            <div className="row">
               
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">
                     Tops technology pvt Ltd.
                        <br />
                        Aditya complex jalaram plot-2 Indiara circle Rajkot-360005
                    </p>
                </div>
               
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Around the Web</h4>
                    <Link className="btn btn-outline-light btn-social mx-1" to="#!"><i className="fab fa-fw fa-facebook-f"></i></Link>
                    <Link className="btn btn-outline-light btn-social mx-1" to="#!"><i className="fab fa-fw fa-twitter"></i></Link>
                    <Link className="btn btn-outline-light btn-social mx-1" to="#!"><i className="fab fa-fw fa-linkedin-in"></i></Link>
                    <Link className="btn btn-outline-light btn-social mx-1" to="#!"><i className="fab fa-fw fa-dribbble"></i></Link>
                </div>
              
                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">About Freelancer</h4>
                    <p className="lead mb-0">
                        Freelance is a free to use, MIT licensed Bootstrap theme created by
                        <Link to="http://startbootstrap.com">Nandini</Link>
                        
                    </p>
                </div>
            </div>
        </div>
    </footer>
   
    <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright &copy; Your Website 2023</small></div>
    </div>
      
    </div>
  )
}
