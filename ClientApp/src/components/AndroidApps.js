import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class AndroidApps extends Component {
    static displayName = AndroidApps.name;

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
                 
                  <li className="active">Android Apps</li>
                </ol>
                <div className="titlebar-content-wrapper">
                  <h1 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Android Apps</h1>
                  <p className="titlebar-description" data-aos="fade-up" data-aos-duration="3000">Innovative solutions to move your business ahead</p>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">The mobile technology is developed by different tools which will not only reduce the development time and saves your money. It is a technique of writing a single codebase for mobile apps that will eventually be used on different mobile operating systems like Android, iOS. Different cross-browser tools that will take your app a long way by making it a flexible application that stands the compatibility test includes: MoSync, Whoop, Appcelerator Titanium, Widgetpad.
</p><p data-aos="fade-up" data-aos-duration="3000">TECHUP is one of the leading Android Application Development Company. Android application development and IOS Development being the core of mobile strategy today, we help global businesses by developing in className Android apps to keep them ahead of the curve. Not only have we developed great Android application and IOS application. With ready to use framework and robust team of Android App Developers in place, we pace up the process of app development and deploy the project as per planned schedule.
</p>
                <p data-aos="fade-up" data-aos-duration="3000">We help you in terms of app design document, wireframe, functional document, UIs design, programming, testing and deployment. Our mobile UI designers work closely with client and design the layout, which is 100% in accordance to client needs. After the design approval, programming is in the process and intermediate deliveries are set in terms of APK.</p>
              <h3 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">We have android app development services that include:</h3>
                <ul className="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Android App Development</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Android App Testing</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Android App UI/UX designs</li>
                
              </ul>
              
              
              <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">At TECHUP, we provide preferred choice by potential clients in Android app development in India as it provides customized and high-quality application at competitive prices. Our competitive pricing is certainly a major advantage, ensuring that even small and midsized companies can take advantage of our application solutions while remaining economical in the budget. We are renowned company in Android application development in world as we provide clients with specialists and experts to build super-engaging and revenue generating application.</p>
              
             <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">Another thing that sets TECHUP apart from other companies in app sector is our experience. We’ve been there before. With over huge number of applications developed to date on both Android and iOS, our experience and expertise ensure that you have the smoothest process possible, and that your project isn’t wrecked by steeplechases and complications that can affect new a new Android app development company. Our apps have seen immense success, and we’re proud to extend that to you.</p>
             
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
                   <li> <Link to="/iOSAppsDevelopment">iOS Development</Link></li>
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
