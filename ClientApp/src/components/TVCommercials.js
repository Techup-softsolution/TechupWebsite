import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class TVCommercials extends Component {
    static displayName = TVCommercials.name;

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
                 
                  <li class="active">TV Commercials</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">TV Commercials</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">TECHUP is a leading Agency that specializes in TV Commercials or ADFILM Making. TV commercials are the most accepted service of never-ending television sets reach across the world. TV commercials take hold of awareness at the earliest and spread the message across the world on immediate telecasts. Billions of TV viewers spend their plenty of time watching TV and given the most time consumed by commercial ads which has turn into usual to not watch it.</p>
 <p data-aos="fade-up" data-aos-duration="3000">TV commercials are most effective when you are targeting the larger market size. The ultimate goal of TV commercials is to grab consumer’s attention at the earliest and best part is that it creates a long-lasting image for consumers. TECHUP examines sketches and manuscripts the right television channels, along with right slot and programming selection to get the maximum impact in your budget. We craft an entire media plan keeping in mind your target market, target audience, and budget</p>
 <p data-aos="fade-up" data-aos-duration="3000">At TECHUP, we make sure that we do not compromise with our client’s on the idea and portray in such a way that connect your ideas to the viewer and create influential ad films and TV commercials.


</p>
               
            <h3>TV Commercials are needed because;</h3>
                <ul class="arrow-1">
                               <li>It helps you show products and services in a simplest way. </li>
                    <li>It helps to add value and trust to your advertising campaigns. </li>
                    <li>It can be used at conferences, exhibition stalls or as part of corporate presentations.</li>
                    </ul>   
              
              
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUP TECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p>
              
             
             
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

