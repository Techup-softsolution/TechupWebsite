import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class iOSApps extends Component {
    static displayName = iOSApps.name;

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
                 
                  <li className="active">iOS Apps Developments</li>
                </ol>
                <div className="titlebar-content-wrapper">
                  <h1 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">iOS Apps Developments</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">TECHUP is a full-service iOS App Development Company providing services that wrap the whole development sequence, from idea to allotment. Influencing established Agile Methodology and domestic capacity, we deliver continuous custom products that cover the entire range of iOS Devices, including iPad, Apple TV, watchOS and iPhone App Development. 
</p>
              <ul className="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Approach
                  <p className="MarginRedus">Our exclusive approach to iOS App Development has resulted in high-quality products that have been downloaded and operated by thousands of users.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000"> Dedicated iOS Developers
                     <p className="MarginRedus">We have skilled iPad and iPhone App Developers that focus in iOS development chosen to your project.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">In-House Coding

                    <p className="MarginRedus">All the iOS app development services are finished in-house at our Ahmedabad office. Not a single code or design has been outsourced.</p>
                </li >
                <li data-aos="fade-up" data-aos-duration="3000">Custom Agile Process
                    <p className="MarginRedus">All iOS development is completed via a custom agile process that minimizes risk, maximizes velocity, and promotes transparency.</p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Seamless Service
                    <p className="MarginRedus">Our iOS development services comprise consulting and product tactic, UX/UI, Development, Testing and technical liberation. </p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">App Store Exploitation
                    <p className="MarginRedus">We grip the complete App Store submission procedure including the listing, descriptions, assets, images and everything which is necessary.</p>
                </li>
              </ul>

              <h3 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">TOOLS WE USE</h3>
            
                <ul className="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">SWIFT CODE:
                  <p className="MarginRedus">SWIFT is a multitalented and influential language for iOS, tvOS, watchOS and macOS. Our iOS developers have bottomless experience delivering apps using swift for iPhones, iPads, Apple Watch and Apple Tv.</p>
                </li>
                    <li data-aos="fade-up" data-aos-duration="3000">OBJECTIVE C:
                  <p className="MarginRedus">Objective C was formerly the main encoding language for iOS, and has taken over to swift for newer iOS apps. Our development team is knowledgeable in both Objective C and Swift, which let us to update code wherever and whenever it is needed.</p>
                </li>
                    <li data-aos="fade-up" data-aos-duration="3000">XCODE:
                  <p className="MarginRedus">XCODE is a development setting with tools that let the teams to develop software for Apple devices underneath both swift and ObjectiveC</p>
                </li>
                     <li data-aos="fade-up" data-aos-duration="3000">Testflight:
                  <p className="MarginRedus">TestFlight used to test beta versions of the iOS Apps before releasing on to the App Store and we always test the App before releasing on the App store and share to the clients to check from their end to get the best feedback.</p>
                </li>


                </ul>

            
              
             
             
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
                   <li> <Link to="/maintananceAndSuport">Maintanance & Suport</Link></li>
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
