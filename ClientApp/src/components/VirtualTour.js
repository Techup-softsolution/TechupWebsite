import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class VirtualTour extends Component {
    static displayName = VirtualTour.name;

    render() {
        return (
         
            <React.Fragment>


<div className="content-section pb0 pt0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="3000">
                                <div id="homepage-slider" className="slider">
                                    {/*<div className="slider-images"></div>
                                      <div class="slider-images owl-carousel owl-theme owl-loaded">*/}

                                    <OwlCarousel items={1}
                                        className="slider-images owl-carousel owl-theme owl-loaded" loop nav margin={3}>
                                        {/* autoplay={true} */}
                                        <div className="owl-stage-outer">
                                            <div className="owl-stage" style={{ "transform": "translate3d(0px, 0px, 0px)", "transition": "all 0s ease 0s", "width": "3447px" }}>
                                                <div className="owl-item active">
                                                    <div className="slider-images-item" style={{ "backgroundImage": "url(./Content/images/slider/1.jpg)" }}>
                                                    </div>
                                                    <div className="slider-content-wrapper">
                                                        <div className="slider-content">
                                                            <div className="slider-item aos-init aos-animate" data-aos="flip-down" data-aos-duration="2000">
                                                                <div className="title">Empowering Business Through People</div>
                                                                <div className="desc">A leading provider of consulting services</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


      <div class="content-section pt0 pb0">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="benefits v2">
                <div class="benefits-item"  data-aos="flip-right" data-aos-duration="3000">
                  <div class="content" >
                    <span class="benefits-item-icon icon-iconmonstr-idea-13"></span>
                    <div class="content-wrapper pTagAlign" >
                      <h4>BETTER DIGITALISATION</h4>
                      <p>Extremely different from print advertising in that space is cheap, Virtual Tour is accessible for a longtime and you can potentially reach a wider audience. Internet has allowed businesses to break through the geographical barriers and become accessible, virtually, from any country in the world. Visitors can access your Virtual Tour from anywhere across the Globe. No Boundaries, No Timeframe, while travelling your cell phone or computer will help in finding a best property.</p>
                      
                    </div>
                  </div>
                </div>
                <div class="benefits-item"  data-aos="flip-right" data-aos-duration="3000">
                  <div class="content">
                    <span class="benefits-item-icon icon-iconmonstr-idea-12"></span>
                    <div class="content-wrapper pTagAlign">
                      <h4>CREDIBILITY</h4>
                      <p>Gives you the opportunity to tell potential customers what you are about and why you deserve their trust and confidence. In fact, many people use the internet for pre-visit research so that they can determine for themselves whether a particular hotel or property is worthy of their patronage, and won’t take them for a ride. The virtual tour also allows for Viral Marketing where your visitors spread positive word-of-mouth about your business - your customers do your marketing!</p>
                     

                    </div>
                  </div>
                </div>
                <div class="benefits-item"  data-aos="flip-right" data-aos-duration="3000">
                  <div class="content">
                    <span class="benefits-item-icon icon-iconmonstr-target-6"></span>
                    <div class="content-wrapper pTagAlign">
                      <h4>BRICK & MORTAR</h4>
                      <p>Owners can show their most popular room types, the suite with a gorgeous view from the balcony, or your well-equipped fitness center, F&B, SPA, Salon, Pool, Golf area, facade, and everything you have. By this facility visitors will get all info before going anywhere and can book their favorite place. This will also share your transparency to the travelers and also help you in representing your Property in most effective TRADE SHOWS, CONFERENCES and CORPORATE MEETINGS as well</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section pb0">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
                  <div class="content-section-header">
                    <div class="content-section-header-wrapper">
                      <h2 class="title" >360 Presentation</h2>
                      <p class="subtitle">For the first time, the 360-degree virtual tour is letting you go to each and every place that you wish to visit but virtually that may be a hotel or any other site view or any product.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                  <h4>
                    <i class="fa fa-folder-open text-primary website"></i>Explore the world of your dreams</h4>
                  <p>Dreams that you can see in reality but virtually with simple, high quality 360-degree tour.</p>
<p>360-degree virtual tour will definitely lead you to incredible adventures with the help of visual reality.</p>
 <p>Get ready for the immense pleasure with the new technology of virtual world.
</p>

                </div>
                <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                  <h4>
                    <i class="fa fa-pie-chart text-primary website"></i> Experience new ways to view the world</h4>
                  <p>You can view the actual space and its appearance with the help of this virtual technology. </p>
<p>Why show brochures when you can show the 360-degree virtual tour to your customers? This has actually showed how the product actually appears. </p>
<p>Exploring the world is now very easy and beyond the imagination, the virtual tour shares with you the 360-degree dimensions of the actual place with the help of the video analysis and other TECHNOLOGIES.
 </p>
                </div>
                <div class="col-sm-12"></div>
                <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                  <h4>
                    <i class="fa fa-cogs text-primary website"></i>World tour with visual world</h4>
                  <p>Planning to go for the tour but confused about the actual view of the place? 360-degree virtual tour helps you there with the actual scene and experience it in a new way.</p>
<p>Why just view the photographs when you have whole technology that helps you see the place, and can get the virtual tour?
</p>
                </div>
                <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                  <h4>
                    <i class="fa fa-map text-primary website"></i> Designed with choice and comfort of your mind</h4>
                  <p>Designed with the choice and comfort in the mind of your imagination leads you to the 360- degree virtual tour. Virtual tour would lead you to view the world that you ever wish to visit without spending a single penny. Yes, the world that will definitely experience the world you find it in your dreams with the help of 360- degree virtual tour. </p>
                </div>
                <div class="col-sm-12"></div>
                <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                  <h4>
                    <i class="fa fa-exclamation-circle text-primary website"></i> Profound technology</h4>
                  <p>Most powerful technology when you are confused about places to visit for honeymoon as it will provide you the world of your dreams in actual dreams. The dream of your own world is here in the tip of your finger, go and explore it. </p>
                </div>
                <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                  <h4>
                    <i class="fa fa-database text-primary website"></i> Sit Back and Imagine</h4>
                  <p>The world full of imaginations and creativity has brought the virtual tour program designed with the tendency of the individual to upgrade your visual world with the help of virtual tour. With all the aspects and virtual visualization into this technology will definitely help you get clarity of your dreams.</p>
                </div>
                <div class="col-sm-12"></div>
                
              </div>
            </div>
            <div class="col-lg-4" >
              <div class="cta-1">
                <figure data-aos="flip-right" data-aos-duration="3000">
                  <a href="Content/images/insights/2.jpg" title="Aliquam pulvinar orci ut nisl imperdiet" class="lightbox-image">
                    <img src="Content/images/insights/2.jpg" alt="Aliquam pulvinar orci ut nisl imperdiet"/>
                  </a>
                </figure>
                <p class="title" data-aos="fade-up" data-aos-duration="2000">WHAT? HOW? WHERE?</p>
                <p data-aos="fade-up" data-aos-duration="2000">Virtual Tours are utilized widely for colleges, Hotels, Real Estates and as a part of the land business. Virtual tours can permit a client to see a situation while on-line. As of now an assortment of commercial enterprises utilize such innovation to showcase their administrations and item. Throughout the most recent couple of years the quality and openness of virtual tours has enhanced extensively, with a few sites permitting the client to explore the visits by tapping on maps or incorporated floor arranges.</p>
                <p data-aos="fade-up" data-aos-duration="2000">A study done by the PEW Research Group demonstrated that more than 5 million Americans watched virtual visits each day in 2004. Seat's exploration information which demonstrated that Americans watching virtual visits ascended from 54 million individuals in 2004 to 72 million individuals by August 2006, a two-year increment of 18 million.</p>

<p data-aos="fade-up" data-aos-duration="2000">Now after 10 years, these digits might have reached to billions according to PEW</p>
                <p>
                  <a href="#" class="btn btn-primary" data-aos="fade-up" data-aos-duration="2000">Visit Portfolio</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div data-background="image" data-background-style="secondary" class="video-preview" data-aos="zoom-in" data-aos-duration="3000">
                <img src="Content/images/insights/3.jpg" alt="" class="data-background-image"/>
                <p class="title">How it works</p>
                <p class="icon" >
                  <a href="https://www.youtube.com/watch?v=6NC_ODHu5jg" class="lightbox-video">
                    <i class="fa fa-play"></i>
                  </a>
                </p>
                
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
                  <h2 class="title" >Who can get the Virtual Tours?</h2>
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
                           <span>Who can get the Virtual Tours?</span>
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
                           <span>Who can get the Virtual Tours?</span>
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
                           <span>Who can get the Virtual Tours?</span>
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
                           <span>Who can get the Virtual Tours?</span>
                        </a>
                        
                      </div>
                    </figure>
                    
                  </div>
                  
                </div>
                <div class="project">
                  <div class="project-details">
                    <figure class="post-thumbnail">
                      <img src="Content/images/VirtualTour/VirtualTour5.jpg" alt=""/>
                      <div class="hover">
                        <a href="Content/images/VirtualTour/VirtualTour5.jpg" title="" class="lightbox-image">
                       
                          <span>Who can get the Virtual Tours?</span>
                        </a>
                       
                      </div>
                    </figure>
                    
                  </div>
                  
                </div>
                <div class="project">
                  <div class="project-details">
                    <figure class="post-thumbnail">
                      <img src="Content/images/VirtualTour/VirtualTour6.jpg" alt=""/>
                      <div class="hover">
                        <a href="Content/images/VirtualTour/VirtualTour6.jpg" title="" class="lightbox-image">
                           <span>Who can get the Virtual Tours?</span>
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

      <div class="content-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="content-block-header" data-aos="fade-up" data-aos-duration="2000">
                <p>A superior ordeal can be  
                  <span>acquired by</span> review an assortment of materials</p>
              </div>
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">for example that got from recordings, messages, and still pictures in intelligent web content. Moreover, a rich and valuable virtual tour is not only a progression of all encompassing pictures.</p>
            </div>
            <div class="col-lg-5" >
              <p data-aos="fade-up" data-aos-duration="2000">Since 2013, we've been making and producing high quality 360 virtual tours and commercial photography. Every day our team who are experienced with more than 13 years in the industry equipped with new thoughts what can be done more and they always deliver exactly what our client wish to. As an Interactive Marketing Company we have worked with many <b>Hotels & Resorts, Real Estate Properties, Restaurants, Cars, Bar, Pub & Lounge, Colleges & Universities, and Tourism Places, Showrooms, Shopping Malls, Airports, Metro Stations, Cruises </b> etc. We are the number one provider for some of the India's biggest businesses who require interactive, tailor made designed interfaces and features that actually make their promotional stand out.</p>

<p data-aos="fade-up" data-aos-duration="2000">Our clientele and testimonials are confirmation that we're well trusted in the industry, the reason we are considered by many as the leading one. It's our mixture of high quality imagery, experience, technical experience and our fantastic worth for money that remains our patrons every day.
</p>
            </div>
          </div>
        </div>
      </div>
         </React.Fragment >

        );
    }
}

