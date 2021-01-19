import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class CommercialPhotography extends Component {
    static displayName = CommercialPhotography.name;

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
                 
                  <li class="active">Commercial Photography</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Commercial Photography</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">Our professional photographers take photos of buildings, models, merchandise, artifacts and Commercial photography is also used in corporate brochures and leaflets, menus in cafes and restaurants, and comparable commercial uses where photographs improve a text. Commercial photographs usually are used totally in the retail and wholesale sectors and in sales supplies or for promotional efforts.
</p>
                <p data-aos="fade-up" data-aos-duration="3000">In commercial photography, the entire photo shoot is dedicated to the product/property being photographed.
</p>
                 <p data-aos="fade-up" data-aos-duration="3000">We have trusted photographers who are experienced in capturing images of great architectural designs in resident and commercial buildings, art galleries, sample houses, Hotel properties with their amenities, retail stores, Food and bar photographs etc.
</p>


              <ul class="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Hotel & Resort Photography
                  <p class="MarginRedus">Having more than 8 years of experience working with hospitality industry, we are among the most experienced photography service provider in the industry. Compared to other photography hospitality photography is entirely different with its criteria of imaging. Our professional photographers always take care of the property, its view points and production for getting best of the photography.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Real Estate Photography
                     <p class="MarginRedus">It is one of the most required services in India as the real estate market in India is booming nowadays and every builder wants their property to look best exactly like the actual one. Builders takes care of every smallest particle of their building so we being the photography agency</p>
<p class="MarginRedus">This kind of photography needs best photo to be used in builder’s brochure, leaflets, hoardings etc. They always use these photographs in the property shows where they can show the photographs to the end customer who visited their stalls.
</p>
                </li>
               
                              </ul>
              
              
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUPTECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p>
              
             
             
            </div>
            <div class="col-lg-4" >
              <div id="sidebar" class="sidebar sidebar-right" >
                <aside class="widget widget-pages" data-aos="flip-right" data-aos-duration="3000">
                
                  <img src="Content/images/website.jpg" />
                </aside>
                <aside class="widget" data-aos="flip-right" data-aos-duration="3000">
                  <h4 class="widget-title">related services</h4>
                  <div class="widget-content">
                   <ul class="arrow-1">
                               <li>
                                <a href="VirtualTour.html">360 Virtual Tour/360 Presentation</a>
                              </li>
                            
                              <li>
                                <a href="GoogleBusinessView.html">Google Business View</a>
                              </li>
                              <li>
                                <a href="GoogleIndoorMap.html">Google Indoor Maps</a>
                              </li>
                              <li>
                                <a href="Walkthrough.html">3D Virtual Tour Walkthrough</a>
                              </li>
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

