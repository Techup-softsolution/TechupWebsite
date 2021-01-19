import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class GoogleIndoorMap extends Component {
    static displayName = GoogleIndoorMap.name;

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
                 
                  <li class="active">Google Indoor Map</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Google Indoor Map</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">Make a more expedient and pleasant visitor experience without paying anything, which can be shown with Google Maps on any devices.
</p>
               
                 <h3>How Its Work?</h3>
                <p data-aos="fade-up" data-aos-duration="3000">With indoor Google Maps, visitors can spend less time searching for building directories and more time discovering new points of interest. Simply zoom in and out of a building and go floor to floor with indoor maps.</p>
                    <p data-aos="fade-up" data-aos-duration="3000">Visitors can save their time in searching for any shop in a mall on which floor it is located. Visitors can check it by using Google maps and zoom it into the mall and then they will get the results.</p>
                <p data-aos="fade-up" data-aos-duration="3000">You will get easily recognizable symbols represent different points of interest inside, your indoor map will be available through the Google Maps APIs for use in your mobile applications or any other website. Our advanced vision algorithms and powerful cloud computing work, delivering amazing results at amazing speeds.</p>
              <ul class="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Zoom in to navigate
                  <p class="MarginRedus">If you want to see the floor plan of a building, simply zoom in the Google Indoor Maps. As soon you’re zoomed in, you can search the desired shop/brand within the building map.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Change the floor by tap
                     <p class="MarginRedus">Visitors can use the Floor Switcher shown in the bottom right-hand corner to shift from level to level in the building/mall.</p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Improve your mobile application or website

                    <p class="MarginRedus">You can use Google Maps APIs to add this feature into your Property website or mobile application.</p>
                </li >
               
                              </ul>
              
              
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUP TECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p>
              
             
             
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
                               
                               <li> <Link to="/home">360 Virtual Tour/360 Presentation</Link></li>
                                
                              
                              
                              <li> <Link to="/home">Commercial Photography</Link></li>
                               
                            
                              
                              <li> <Link to="/home">Google Business View</Link></li>
                                
                              
                            
                              
                              <li> <Link to="/home">3D Walkthrough</Link></li>
                                
                              
                   </ul>
                  </div>
                </aside>
                
              </div>
            </div>
          </div>
        </div>
      </div>
<div class="content-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12" data-aos="fade-up" data-aos-duration="2000">
              <div class="content-section-header">
                <div class="content-section-header-wrapper">
                  <h2 class="title" >Who can avail Indoor Maps?</h2>
                  <p class="subtitle">Because that adds more benefits promoting your properties globally</p>
                </div>
                <div id="featured-insights-nav" class="owl-nav mt0"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
              <div id="featured-insights" class="content-carousel owl-carousel owl-theme">
                <div class="project">
                  <div class="project-details">
                    <figure class="post-thumbnail">
                      <img src="Content/images/VirtualTour/VirtualTour1.jpg" alt=""/>
                      <div class="hover">
                        <a href="Content/images/VirtualTour/VirtualTour1.jpg" title="" class="lightbox-image">
                           <span>Airports</span>
                        </a>
                      </div>
                    </figure>
                   
                  </div>
                  
                </div>
                <div class="project">
                  <div class="project-details">
                    <figure class="post-thumbnail">
                      <img src="Content/images/VirtualTour/VirtualTour2.jpg" alt=""/>
                      <div class="hover">
                        <a href="Content/images/VirtualTour/VirtualTour2.jpg" title="" class="lightbox-image">
                           <span>Malls</span>
                        </a>
                        
                      </div>
                    </figure>
                    
                  </div>
                  
                </div>
                <div class="project">
                  <div class="project-details">
                    <figure class="post-thumbnail">
                      <img src="Content/images/VirtualTour/VirtualTour3.jpg" alt=""/>
                      <div class="hover">
                        <a href="Content/images/VirtualTour/VirtualTour3.jpg" title="" class="lightbox-image">
                           <span>Stadiums</span>
                        </a>
                        
                      </div>
                    </figure>
                    
                  </div>
              
                </div>
                <div class="project">
                  <div class="project-details">
                    <figure class="post-thumbnail">
                      <img src="Content/images/VirtualTour/VirtualTour4.jpg" alt=""/>
                      <div class="hover">
                        <a href="Content/images/VirtualTour/VirtualTour4.jpg" title="" class="lightbox-image">
                           <span>Transit</span>
                        </a>
                        
                      </div>
                    </figure>
                    
                  </div>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

 </React.Fragment >

        );
    }
}

