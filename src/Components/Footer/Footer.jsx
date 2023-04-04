/* eslint-disable */

import React from 'react';
import useStyles from "./styles";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";


const FIL = () => {
    const classes = useStyles();
  return (
    <div className={classes.surBox}>
          
            <div className={classes.surColumn}>
              <div className={classes.surHeading}>Links</div>
              <Link to="/Privacy" style={{textDecoration: 'none', color: 'black'}}>Privacy Policy</Link><br/>
              
              {/* <div  href="#">Terms and Conditions</div>
              <div  href="#">Contacts us</div>
              <div  href="#">Refund Policy</div> */}
            </div>
            
            <div className={classes.surColumn}>
              <div className={classes.surHeading}>Contact Us</div>
              <div  href="#" style={{color:"black"}}><b>Roma's handcrafted</b></div>
              9, Manikanta nilaya, <br />
              28th 'A' main AR layout<br />
              J.P. nagar 6th phase <br />
              Bangalore - 560078
            </div>
            
            <div className={classes.surColumn}>
              <div className={classes.surHeading}>Social Media</div>
              <div className={classes.socapps}>
              <a  href="https://www.instagram.com/romashandcrafted/" style={{textDecoration: 'none', color: 'black'}}><InstagramIcon /></a>
              <a  href="https://www.facebook.com/romashandmadesoaps" style={{textDecoration: 'none', color: 'black'}}><FacebookIcon /></a>
              <a  href="https://www.youtube.com/channel/UCvG0QaRrOTGxjVLLIHCmeqg" style={{textDecoration: 'none', color: 'black'}}><YouTubeIcon /></a>
              <a  href="https://wa.me/c/919035637063" style={{textDecoration: 'none', color: 'black'}}><WhatsAppIcon /></a>
              </div>
            </div>
          
      </div>
  );
};
export default FIL;

