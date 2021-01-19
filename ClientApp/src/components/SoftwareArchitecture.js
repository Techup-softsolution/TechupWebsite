import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class SoftwareArchitecture extends Component {
    static displayName = SoftwareArchitecture.name;

    render() {
        return (
         
            <React.Fragment>

<div className="content-section titlebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
              <div id="titlebar" className="titlebar-content" data-aos="fade-up" data-aos-duration="3000">
                <img src="./Content/images/insights/4.jpg" alt="" className="titlebar-bg"/>
                <ol className="breadcrumb" data-aos="fade-up" data-aos-duration="2000">
                  <li>
                  <Link to="/home">Home</Link>
                  </li>
                 
                  <li className="active">Software Architecture</li>
                </ol>
                <div className="titlebar-content-wrapper">
                  <h1 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Software Architecture</h1>
                  <p className="titlebar-description" data-aos="fade-up" data-aos-duration="3000">Innovative solutions to move your business forward</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-section-header" data-aos="fade-up" data-aos-duration="3000">
                <div className="content-section-header-wrapper" >
                  <h3>what we do</h3>
                </div>
              </div>
              <p className="website" data-aos="fade-up" data-aos-duration="3000">Software architecture is the defining and constructing of a solution that meets technical and functioning needs. Software architecture optimizes characteristics involving a sequence of decisions like security, performance and manageability. These conclusions eventually impact application quality, continuation, presentation and overall achievement. 
</p>
                <p data-aos="fade-up" data-aos-duration="3000">Software architecture is a structured framework used to conceptualize software elements, relations and assets. The software architecture process works with the concepts and divisions of these concerns to reduce complication.
</p>
                <p data-aos="fade-up" data-aos-duration="3000">Architecture Description Language (ADL) explains software architecture. Different ADLs are developed by various groups. Common ADL elements are connectors, components and configuration.
</p>
                <p data-aos="fade-up" data-aos-duration="3000">For almost 5 years, TECHUP has been active in the formation and development of the field of software engineering known as software architecture.
</p>
             

              <h3 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Software Architecture Methods</h3>
            
                <ul className="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Covers architecturally significant necessities by analyzing the business drivers, system framework, and issues that system stakeholders consider serious to success. There are two methods we use to recognize significant nonfunctional quality traits of the system such as performance, dependability, security, safety and clarify system requirements: the Quality Attribute Workshop and the Mission Thread Workshop.
                </li>
                    <li data-aos="fade-up" data-aos-duration="3000">Making architecture by increasing architectural structures and management strategies that satisfy requirements. 
                </li>
                    <li data-aos="fade-up" data-aos-duration="3000">Estimate the architecture by formatting its capability to support the quality characteristics which meet the organization's business & goals. 
                </li>
                     <li data-aos="fade-up" data-aos-duration="3000">Document the architecture in adequate elements and in an easily available shape to help communication with the developers and other stakeholders and support the analysis.
                </li>


                </ul>

              {/* <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUP TECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p> */}
              
             
             
            </div>
            <div className="col-lg-4" >
              <div id="sidebar" className="sidebar sidebar-right" >
                <aside className="widget widget-pages" data-aos="flip-right" data-aos-duration="3000">
                
                  <img src="./Content/images/website.jpg" />
                </aside>
                <aside className="widget" data-aos="flip-right" data-aos-duration="3000">
                  <h4 className="widget-title">related services</h4>
                  <div className="widget-content">
                   <ul className="arrow-1">
                   <li> <Link to="/website">Website Development</Link></li>
                   <li> <Link to="/software">Software Development</Link></li>
                   <li> <Link to="/androidApps">Android Development</Link></li>
                   <li> <Link to="/iOSApps">iOS Development</Link></li>
                   <li> <Link to="/maintananceAndSuport">Maintanance & Suport</Link></li>
                   <li> <Link to="/uIUXDesign">UI/UX Design</Link></li>

                      
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
