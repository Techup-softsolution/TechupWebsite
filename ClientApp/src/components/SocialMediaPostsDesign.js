import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class SocialMediaPostsDesign extends Component {
    static displayName = SocialMediaPostsDesign.name;

    render() {
        return (
         
            <React.Fragment>
 <div class="content-section titlebar">
        <div class="container">
          <div class="row">
            <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
              <div id="titlebar" class="titlebar-content" data-aos="fade-up" data-aos-duration="3000">
                <img src="Content/images/insights/4.jpg" alt="" class="titlebar-bg"/>
                <ol class="breadcrumb" data-aos="fade-up" data-aos-duration="2000">
                  <li>
                  <Link to="/home">Home</Link>
                  </li>
                 
                  <li class="active">Social Media Posts Design</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Social Media Posts Design</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">At TECHUP, we provide social media design services to help our clients effectively brand your social media channels, taking them beyond ordinary out-of-the-box channel designs to those that drive actions. Our social media design services include the following channels:</p>

                 <ul class="arrow-1">
                      <li data-aos="fade-up" data-aos-duration="3000">Branded designs for individual channels</li>
                      <li data-aos="fade-up" data-aos-duration="3000">Custom headers</li>
                      <li data-aos="fade-up" data-aos-duration="3000">Custom Facebook tabular design and app development</li>
                      <li data-aos="fade-up" data-aos-duration="3000">Custom designs for single or multi-channel campaigns</li>
                      <li data-aos="fade-up" data-aos-duration="3000">Corresponding onsite landing pages and collateral</li>
                     <li data-aos="fade-up" data-aos-duration="3000">Micro sites, blogs</li>
                     <li data-aos="fade-up" data-aos-duration="3000">Forums</li>
                     </ul>
                
                
               
           
             <p data-aos="fade-up" data-aos-duration="3000"> Whether you’re running a one-time campaign or need branded design across your social media channels, our talented design and development team will help you design all the social media posts for the finalized services that you want. Good social media marketing is always about high quality content and consistent branding. Neither is possible without proper design work, simply because social media is a visual platform for your company. TECHUP will help - pricing for your design services that will be in your budget and transparent for your customers.</p>
              
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUP TECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p>
              
             
             
            </div>
            <div class="col-lg-4" >
              <div id="sidebar" class="sidebar sidebar-right" >
                <aside class="widget widget-pages" data-aos="flip-right" data-aos-duration="3000" >
                
                  <img src="Content/images/website.jpg" />
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

