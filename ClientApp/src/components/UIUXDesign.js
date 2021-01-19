import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class UIUXDesign extends Component {
    static displayName = UIUXDesign.name;

    render() {
        return (
         
            <React.Fragment>\
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
                 
                  <li class="active">UI/UX Design</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">UI/UX Design</h1>
                  <p class="titlebar-description" data-aos="fade-up" data-aos-duration="3000">Innovative solutions to move your business ahead</p>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">When you want to book a movie ticket from a mobile app but you don’t find an option where the tickets booked and you feel it was just a wasting of your time? Yes! This is because they don’t have a good UX Design.
</p>
              <ul class="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">UX Design (also known as User Experience) 
                  <p class="MarginRedus">UX Design (also known as User Experience) regularly careful as the design of websites, apps, equipment, mobile devices, and software applications with the spotlight on the user's experience (UX) and interface. User Interface Design is meant to make the user's interaction as easy and efficient as possible. Since it concerns achieving user goals, it is frequently called user-centered design. With the help of high-quality User Interface Design, clients finish an assignment without giving pointless awareness to the procedure of doing it.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">UI Design 
                     <p class="MarginRedus">UI Design is difficult and time consuming; and wants intelligent use of graphic interface design, look and feel design, creating prototypes and usability testing, user analysis and so on. If you are designing a new app or software, you may consider contacting us for the UI design of your product. </p>
<p class="MarginRedus">UX design to us means making sure a nice and joyful experience for clients while they exploit Websites, Apps, Software Products or any services. Designing for user’s expediency with aspire to give them pleasant experience is the root of our UX tactics.
</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">How we work on Design:

                    <p class="MarginRedus">We concentrate on morality like Information Architecture, interface drawing, visual design to make magnificent lines and believe fundamentals of UX while designing.</p>
                </li >
                <li data-aos="fade-up" data-aos-duration="3000">Quality Assurance and Testing
                    <p class="MarginRedus">Quality Assurance & Testing helps our clients for all industry verticals by building QA enterprise by providing transformation models to address changing technological solution, business transformation, and new engagement models. This quality assurance testing will definitely help with growing need of quality assurance till the present condition. TECHUP will assure the best QA testing with further analytical path. This is how assurance of Quality and testing being taken care here. </p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Functionality
                    <p class="MarginRedus">Good functionality is very important to make an optimistic experience for an entity. It’s about creating a product or device or software more usable.</p>

                </li>
                  <li data-aos="fade-up" data-aos-duration="3000">Ease of access
                    <p class="MarginRedus">Ease of access clarifies how simple it is to appreciate, use and access the UI. The result of user study helps in improving UI design.</p>

                </li>
                  <li data-aos="fade-up" data-aos-duration="3000">Interface Design
                    <p class="MarginRedus">The purpose is to integrate user needs into a design and describe the UI design patterns of interface fitting in the framework of use.</p>

                </li>
                              </ul>
              
              
              {/* <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUP TECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p> */}
              
             
             
            </div>
            <div class="col-lg-4" >
              <div id="sidebar" class="sidebar sidebar-right" >
                <aside class="widget widget-pages" data-aos="flip-right" data-aos-duration="3000">
                
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
                   <li> <Link to="/maintananceAndSuport">Maintanance & Suport</Link></li>
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
