import React from 'react';
//const avt="../avataaars.svg";
import avt from '../../avataaars.svg'
export default function Header() {
  return (
    <div>
    <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
  {/* Masthead Avatar Image */}
        <img className="masthead-avatar mb-5" src={avt} alt="avtar" />
       {/* Masthead Heading */}
        <h1 className="masthead-heading text-uppercase mb-0">Prerna Dave</h1>
        {/*Icon Divider */}
        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        {/* Masthead Subheading */}
        <p className="masthead-subheading font-weight-light mb-0">Frontend Developer - React Js Developer</p>
    </div>
</header>
      
    </div>
  )
}