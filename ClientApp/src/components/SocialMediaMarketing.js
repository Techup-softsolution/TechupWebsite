import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class SocialMediaMarketing extends Component {
    static displayName = SocialMediaMarketing.name;

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
                 
                  <li class="active">Social Media Marketing</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Social Media Marketing</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">TECHUP Social Media Service is designed by keeping in mind your own unique business challenges and objectives. As with everything, one size rarely fits all and so our social media service emphasis the focus clearly on what matters most to your business.
</p>
                <p data-aos="fade-up" data-aos-duration="3000">Our social squad will assist you make speedy, hasty updates that totally targets extra which always help your brand for a global coverage.
</p>
             
                
                                 <br />
                <p class="MarginRedus" data-aos="fade-up" data-aos-duration="3000"><b>How Its Work</b> </p>
                     
                 <ul class="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Strategy: 

                    <p class="MarginRedus">Developing a Digital Strategy for Brands, by using various social media platforms and channels to help promoting, spreading, and connecting.</p>
                </li >
                <li data-aos="fade-up" data-aos-duration="3000">Advertising: 
                    <p class="MarginRedus">Social Media Advertising is about making your Advertisement to the audience you want to target with their designation, region, age and interests. ROI of these kind of ads will never disappoint you by campaigning for long term on regular basis.</p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Audience Identification:
                    <p class="MarginRedus">We help our clients in identifying their followers, communities, and the spectators that will endorse and look after your Brand by campaigning properly on Social Media Platforms.</p>

                </li>
                      <li data-aos="fade-up" data-aos-duration="3000">Audit: 
                    <p class="MarginRedus">evaluating your social media assets, strategies, and audience engagement, including response, supervision and significance.
</p>

                </li>
                  
                              </ul>
              
              
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">At TECHUP, we definitely consider taking the time to get to know your business, recognize what equals success for you, and bring a service where our role of Social Marketers starts.</p>
              
             

             
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

