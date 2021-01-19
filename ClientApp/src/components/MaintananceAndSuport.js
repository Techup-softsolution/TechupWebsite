import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class MaintananceAndSuport extends Component {
    static displayName = MaintananceAndSuport.name;

    render() {
        return (
         
            <React.Fragment>
 
 <div class="content-section titlebar">
        <div class="container">
          <div class="row">
            <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
              <div id="titlebar" class="titlebar-content" data-aos="fade-up" data-aos-duration="3000">
                <img src="./Content/images/insights/4.jpg" alt="" class="titlebar-bg"/>
                <ol class="breadcrumb" data-aos="fade-up" data-aos-duration="2000">
                  <li>
                  <Link to="/home">Home</Link>
                  </li>
                 
                  <li class="active">Maintanance & Suport</li>
                </ol>
                <div class="titlebar-content-wrapper">
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Maintanance & Suport</h1>
                  <p class="titlebar-description" data-aos="fade-up" data-aos-duration="3000">Innovative solutions to move your business forward</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="content-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="content-section-header" data-aos="fade-up" data-aos-duration="3000">
                <div class="content-section-header-wrapper" >
                  <h3>what we do</h3>
                </div>
              </div>
              <p className="website" data-aos="fade-up" data-aos-duration="3000">TECHUP provides free, unbiased guidance from our team of experienced software advisors that will definitely help you maintain your software and suggest innovations that are required in your website.
</p><p data-aos="fade-up" data-aos-duration="3000">From all the clients we have got, they have definitely commented relevant recommendations we have many maintenance management systems we've already solved.
</p>
                <p data-aos="fade-up" data-aos-duration="3000">It is built to provide a simple, personalized process built to save your time and money.</p>
                <h3 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Maintenance and support includes: </h3>
              <ul class="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Bug fixing and problem reporting. </li>
                  <li data-aos="fade-up" data-aos-duration="3000">Website edits revision, updates or making new contents on existing WebPages based on requests.   </li>
                  <li data-aos="fade-up" data-aos-duration="3000">Backup and maintain a file library of assets, graphics, and source code and revision history for your website and portal. </li>
                  <li data-aos="fade-up" data-aos-duration="3000">Communicate with hardware engineers, hosting support, and other associate service units.  </li>
                  <li data-aos="fade-up" data-aos-duration="3000">Development of new graphics and icons. Modification of CSS styles and code.</li>
                 
                
              </ul>
                          
              {/* <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUP TECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p> */}
              
             
             
            </div>
            <div class="col-lg-4" >
              <div id="sidebar" class="sidebar sidebar-right" >
                <aside class="widget widget-pages" data-aos="flip-right" data-aos-duration="3000" >
                
                  <img src="./Content/images/website.jpg" />
                </aside>
                <aside class="widget" data-aos="flip-right" data-aos-duration="3000">
                  <h4 class="widget-title">related services</h4>
                  <div class="widget-content">
                   <ul class="arrow-1">
                   <li> <Link to="/website">Website Development</Link></li>
                   <li> <Link to="/software">Software Development</Link></li>
                   <li> <Link to="/androidApps">Android Development</Link></li>
                   <li> <Link to="/iOSApps">iOS Development</Link></li>
                   <li> <Link to="/uIUXDesign">UI/UX Design</Link></li>
                   <li> <Link to="/softwareArchitecture">Software Architecture</Link></li>
                 
                   </ul>
                  </div>
                </aside>
                
              </div>
            </div>
          </div>
        </div>
      </div>

   </React.Fragment >

        );
    }
}
