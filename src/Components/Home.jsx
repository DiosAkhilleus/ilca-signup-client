import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// DEPRECATED —— NOT IN USE

const Home = () => {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      {/* <Link className='home-link' to='/timeslots'>Time Slot Selector</Link> */}
      {/* <Link className='home-link' to='/posttimeslot'>Post Time Slot</Link> */}
      {/* <Link className='home-link' to='/viewtimeslot'>View Time Slot</Link> */}
      <Link className='link' to='/admin'>Admin Page</Link>
      <Link className='link' to='/postsailor'>New Sailor Form</Link>
      <Link className='link' to='/displaysailors'>Show all entered sailors</Link> 
    </div>
  );
};

export default Home;
