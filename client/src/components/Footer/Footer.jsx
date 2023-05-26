import React from 'react'
import './Footer.css'
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import SportsBasketballRoundedIcon from '@mui/icons-material/SportsBasketballRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
    <div className="footer">


<div className="colorlib">
    <p>Copyright ©2023 All rights reserved | This template is made with by <span style={{color:"red"}}>Colorlib</span></p>
</div>
<div className="icons">
    <div className='icn'><FacebookIcon/></div>
    <div className='icn'><TwitterIcon/></div>
    <div className='icn'><SportsBasketballRoundedIcon/></div>
    <div className='icn'><FormatBoldRoundedIcon/></div>
</div>


    </div>
    </>
  )
}

export default Footer