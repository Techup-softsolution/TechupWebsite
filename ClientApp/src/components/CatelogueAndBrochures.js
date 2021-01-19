import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class CatelogueAndBrochures extends Component {
    static displayName = CatelogueAndBrochures.name;

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
                 
                  <li class="active">Catelogue & Brochures</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Catelogue & Brochures</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">In order to be effective, brochures need to be prominently attractive and communicate a clear message. At SIMINFOX, our design team will work with you to present each of your products or services in an exciting and unforgettable layout. When completed, your brochure will have outstanding sales that showcase your business. We will have your brochure printed with our print partners or we will provide your final brochure design in a file format. In today’s marketplace, many companies need PDF brochures, which are downloadable through corporate websites. We will supply you with all files in a native format and optimized files that are easy to download and sent via email. Additionally, the TECHUPteam can convert or natively design your corporate catalogue or product brochure. We will help with your Product Photography in the studio.</p>
                 
              
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUPTECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p>
              
             
             
            </div>
            <div class="col-lg-4" >
              <div id="sidebar" class="sidebar sidebar-right" >
                <aside class="widget widget-pages" data-aos="flip-right" data-aos-duration="3000">
                
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

