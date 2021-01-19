import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class FacebookAdds extends Component {
    static displayName = FacebookAdds.name;

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
                 
                  <li class="active">Facebook Adds</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Facebook Adds</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">To advertise your products and services online to the widest possible audiences, TECHUP provides Facebook marketing services provided is the best that give business owners a golden chance to directly connect with their customers who are keen on acquiring the services that they need. Over the past years, we have grown effectively and turned out to be a powerful Facebook Ad providing company which is focused on providing the enhanced user engagement and traffic to your targeted service pages.</p>
 <p data-aos="fade-up" data-aos-duration="3000">TECHUP is among the first in the industry to offer Facebook adverting. This has allowed TECHUP to have a competitive edge. Our Facebook ads focus on emotional consumer initiatives. This allows TECHUP to drive more likes and conversions. TECHUP provides creative platform how to manage Facebook company pages for medium to large businesses. The TECHUP social media process involves creating the updates, getting them official by the client and then executing the updates at times when engagement levels are the highest. To integrate Facebook ads, along with the page updates, at the right time to maximize post shares and distribution.

</p>
               
           
              
              
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

