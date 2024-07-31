import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import { Nav} from 'react-bootstrap';
import Navbar from './Navbar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
export default function Layout() {
  return (
    <div>
{/* Navbar components reuse here */}
<Navbar />
{/* header components reuse here */}
<Header />
{/* content components reuse here */}
<Content />
{/* footer components reuse here */}
<Footer />
  <Outlet />
    </div>
  )
}