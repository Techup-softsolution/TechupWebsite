import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class Software extends Component {
    static displayName = Software.name;

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
                 
                  <li class="active">Software</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Software Development</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">TECHUP has already built hundreds of products that range from mobile applications and cloud solutions and enterprise applications. We are committed to solve complex problems and deliver high quality solutions within time constraints frames and budgets. Our software development consultants include project managers, business analysts, web developers and content analysts.
</p>
              <ul class="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Cloud Automation
                  <p class="MarginRedus">Cloud automation has already been adopted in the legacy of application for the unique needs that they have. This helps with position of modernized solutions for the unique needs that they always have to bring with them. We understand legacy transportation and its applications, having been in our business for over longer time period. This helps us in abeneficial position for modernizing legacy applications through the cloud and micro-services building solutions.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Transforming into Digital World
                     <p class="MarginRedus">TECHUP helps you with the conduct of business to be transformed into digital age nevertheless of small, medium and large enterprises that would transform the way small, medium and large enterprises Our Digital Revolution services help your team build cloud products faster, strengthen customer relationships and collaborate effectively, thereby increasing revenue and customer satisfaction.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">New Product Development

                    <p class="MarginRedus">Today’s digital enterprise needs innovative solutions that will be helpful for the product development in a way that it would be developed into the entire product lifecycle. The technology needs to be so advanced that it should boost the customers with all the innovative solutions. TECHUP helps with the product that will have the best product innovations building software product engineering with proven track record and transform the lifecycle with competitive advances. The transformation of technology and devices is rewriting the rules of product development over the traditional methods.</p>
                </li >
                <li data-aos="fade-up" data-aos-duration="3000">Quality Assurance and Testing
                    <p class="MarginRedus">Quality Assurance & Testing helps our clients for all industry verticals by building QA enterprise by providing transformation models to address changing technological solution, business transformation, and new engagement models. This quality assurance testing will definitely help with growing need of quality assurance till the present condition. TECHUP will assure the best QA testing with further analytical path. This is how assurance of Quality and testing being taken care here. </p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Solutions for your mobility Presence
                    <p class="MarginRedus">TECHUP helps crating the mobility solutions for your large enterprise. With the decade of experience with the capabilities of solving mobility, we have spread the market of mobility presence with software solutions.  Mobile technologies are fast becoming a transformative force, where the engagement of all the stakeholders is designed into the same platform. With mobility presence the solution of staying connected has become very easy. Solution to grow and make your presence worth in this competitive world is tough but TECHUP understands the requirement and therefore is here to help you with all the required constraints. </p>

                </li>
                              </ul>
              
              <div class="cta-1">
                <p class="title" data-aos="fade-up" data-aos-duration="3000">Software? Yes! You are at the right place..</p>
                <p data-aos="fade-up" data-aos-duration="3000">We are having a brilliant team of Software developers who have developed software products used in Restaurants/Bars, Petrol and Gas Stations and Corporate companies who always want their system smooth.</p>
                <div class="iframe-wrapper" data-aos="zoom-in" data-aos-duration="3000">
                  <iframe src="https://player.vimeo.com/video/194468163?color=ffffff&amp;portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
              </div>
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUP TECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p>
              
             
             
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
                   <li> <Link to="/androidApps">Android Development</Link></li>
                   <li> <Link to="/iOSApps">iOS Development</Link></li>
                   <li> <Link to="/androidApps">Maintanance & Suport</Link></li>
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
