import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer className="content-section site-footer site-footer-1">
                <i id="to-the-top" className="to-the-top fa fa-angle-double-up"></i>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-4">
                            {/* Logo start */}
                            <p data-aos="flip-right" data-aos-duration="3000">
                                <Link to="/home" title="Thompson Homepage" className="FooterLogo">
                                    <img src="./Content/images/FooterLogo.png" alt="" />
                                </Link>
                            </p>

                          
                         

                            
                           
                           
                            {/* Logo end */}
                            <p className="px">Techup is a full-service agency that have  represented<br></br> some of the reputed brands worldwide.</p>
                      
                      
                            <div class="f-social">
                             <a className="border border-primary" href="https://www.linkedin.com/company/techup-soft-solution"><i className="fa fa-linkedin linkdel "></i></a>
								                 <a className="border border-primary"  href="https://twitter.com/techupsoftso"><i class="fa fa-twitter"></i></a>
								                 <a className="border border-primary" href="https://www.facebook.com/techupsoftsolutions"><i class="fa fa-facebook"></i></a>
								                 {/* <a className="border border-primary"  href="https://in.pinterest.com/"><i class="fa fa-pinterest"></i></a>
								                 <a className="border border-primary"  href="https://www.instagram.com/accounts/login/?hl=en"><i class="fa fa-instagram"></i></a> */}
								                </div>
                        </div>
                        
                        <div className="col-md-4 col-lg-2 widget" data-aos="flip-right" data-aos-duration="3000">
                            <h4><b class="ft">address</b></h4><br></br>
                          
                            <div className="widget-content">
                       
                                <p>
                               
                                    <strong className="text-heading">Techup Software Solutions</strong>  <br></br>
                                 
                                    < p className="ap"> 407.Aarohi Verve,Beside One World West,S.P.Ring Road,Ambali,Ahmedabad<br></br>India</p>


                  </p>
                  <p>
                                   
                                    < p className="ap"> 11 Hawtrey Avenue,
Northolt, England,
United Kingdom-UB5 5JB</p>


                  </p>
                            </div>
                        </div>
                        <div className="col-sm-12 visible-sm"></div>
                        <div className="col-sm-6 col-md-4 col-lg-3 widget widget_footer_contacts" data-aos="flip-right" data-aos-duration="3000">
                            <h4><b class="ft">Quick Links</b></h4>
                            <div className="widget-content">
                            
                            <a><Link to="/Contact">Contact Us</Link></a><br></br>
                            <Link to="/aboutUs">AboutUs </Link><br></br>
                              
                             <Link to="/carrier">Carrier</Link> <br></br>
                               <Link to="/softwareArchitecture">Software Architecture</Link> <br></br> 
                             <Link to="/androidApps">AndroidApps Development</Link> <br></br>
                             {/* <Link to="/iOSApps">iOSApps Development</Link> <br></br>
                             <Link to="/maintananceAndSuport">Maintanance And Suport</Link> <br></br>
                           
                             {/* <Link to="/digitalMarketing">Digital Marketing</Link> <br></br> */}
                                           
                                
                               
                            
                            </div>
                        </div>









                      











                        
                        <div className="col-sm-6 col-md-4 col-lg-3 widget widget_footer_contacts" data-aos="flip-right" data-aos-duration="3000">
                            <h4><b class="ft">Contact Us</b></h4>
                            <div className="widget-content">
                                <ul>
                                     <i class="fa fa-phone" aria-hidden="true"></i>
                                    <li className="av">
                                    <a className ="phonfooter1">(+91) 909-901-1665</a>
                                    </li>
                                   
                                </ul> 
                                <ul>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                    <li className="av">
                                    < a className="phonfooter"> +44 7968245071</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li><i class="fa fa-envelope" aria-hidden="true">&nbsp;</i></li>
                                    <li>
                                        <a href="https://accounts.google.com/ServiceLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;osid=1&amp;service=mail&amp;ss=1&amp;ltmpl=default&amp;rm=false&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin">business@techupsoftsolution.com</a>
                                    </li>
                                    
                                
                                </ul>
                                <ul>
                                    <li><i class="fa fa-envelope" aria-hidden="true">&nbsp;</i></li>
                                    <li>
                                        <a className="mailfooter" href="https://accounts.google.com/ServiceLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;osid=1&amp;service=mail&amp;ss=1&amp;ltmpl=default&amp;rm=false&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin">dhaval@techupsoftsolution.com</a>
                                    </li>
                                    
                                
                                </ul>
                                <ul>
                                    <li><i class="fa fa-skype" aria-hidden="true">&nbsp;</i></li>
                                    <li>
                                        <a class="skypefooter"href="https://accounts.google.com/ServiceLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;osid=1&amp;service=mail&amp;ss=1&amp;ltmpl=default&amp;rm=false&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin">Techup software</a>
                                    </li>
                                    
                                
                                </ul>
                                {/* <ul className="margin">
                                    <li>Other Web:</li>
                                    <li>
                                        <a href="techupsoftsolution.com">techupsoftsolution.com</a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>

 
                    <div className="NewWidth">
                        <div className="col-lg-8 col-md-8 col-sm-9 bottom-line">
                            {/* <p >Copyright � 2013 - 2018
                <a href="#">&nbsp;TECHUP</a>.</p> */}

                        </div>
                    </div>
                </div>
               


               
                <div id="chat-circle" class="btn btn-raised">
        <div id="chat-overlay"></div>
        <i class="fa fa-comments-o"></i>
  </div>
  
  <div class="chat-box">
    <div class="chat-box-header">
      Chat Box
      <span class="chat-box-toggle"><i class="fa fa-times"></i></span>
    </div>
    <div class="chat-box-body">
      <div class="chat-box-overlay">   
      </div>
      <div class="chat-logs">
       
      </div>
    </div>
    <div class="chat-input">      
      <form>
        <input type="text" id="chat-input" placeholder="Write a message..."/>
      <button type="submit" class="chat-submit" id="chat-submit"><i class="fa fa-paper-plane"></i></button>
      </form>      
    </div>
  </div>


                {/* <a  class="  "><span id="tawkchat-chat-bubble-close" class="image-bubble-close"></span><img src="https://static-v.tawk.to/a-v3/images/bubbles/168-r-br.svg"/><a id="bubble-image" class="gallery-bubble" href="#"></a></a> */}
                
            </footer>
        );
    }
}
