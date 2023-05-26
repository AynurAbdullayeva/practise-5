import React from "react";
import "./Appbar.css";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <>
      <div className="header">

      <div className="gymbar">
        <div>
          <h5>
            We believe we helps people <br />
            for happier lives
          </h5>
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/gym/img/logo.png"
            alt="logo"
          />
        </div>
       <div className="number"> 
        <div>
          <a href="/home">
            <b>+880 123 12 658 439 </b>
          </a>
        </div>
        <div className="callicon">
          <CallIcon />
        </div>
        </div>
        
      </div>


      <div className="appbar">
        <div className="links">
            <Link to="/"><h6 className="link">HOME</h6></Link>
            <Link to="/add"><h6  className="link">ADD</h6></Link>
            <Link to="/offer"><h6  className="link">WE OFFER</h6></Link>
            <Link to="/course"><h6  className="link">TOP COURSE</h6></Link>
            <Link to="/schecule"><h6  className="link">TOP COURSE</h6></Link>
            <Link to="/trainer"><h6  className="link">TRAINER</h6></Link>
            <Link to="/plan"><h6  className="link">PLAN</h6></Link>
            <Link to="/pages"><h6  className="link">PAGES</h6></Link>
        </div>
      </div>


      </div>
    </>
  );
};

export default Appbar;
