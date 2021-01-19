import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class GoogleBusinessView extends Component {
    static displayName = GoogleBusinessView.name;

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
                                                                <div className="title">Google Business View</div>
                                                                <div className="desc">Improve your presence across Google with a premium-quality, 360° virtual tour powered by Street View technology.</div>
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
                    <div class="benefits-item" data-aos="flip-right" data-aos-duration="3000">
                        <div class="content">
                            <span class="benefits-item-icon icon-iconmonstr-idea-13"></span>
                            <div class="content-wrapper pTagAlign">
                                <h4>GOOGLE SEARCH</h4>
                                <p>Your Google business listing is your company’s most visible asset. Improve your presence with Street View content. Your business will be shown on Google Search with this business view.</p>
                                <p>
                                    <a href="#">Check Example...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="benefits-item" data-aos="flip-right" data-aos-duration="3000">
                        <div class="content">
                            <span class="benefits-item-icon icon-iconmonstr-idea-12"></span>
                            <div class="content-wrapper pTagAlign">
                                <h4>GOOGLE MAPS</h4>
                                <p>
                                    Plant your flag. When prospective customers seek you out on Google Maps, help ensure that their first encounters are great ones. You wil have authentic Google Maps location with a google baloon
                                </p>

                                <p>
                                    <a href="#">Check Example...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="benefits-item" data-aos="flip-right" data-aos-duration="3000">
                        <div class="content">
                            <span class="benefits-item-icon icon-iconmonstr-target-6"></span>
                            <div class="content-wrapper pTagAlign">
                                <h4>HOTELS ON GOOGLE</h4>
                                <p>
                                    Give travelers a tour of your hotel when they find your property on Google Search or Google Maps. Get your favorite hotel visiting its virtual tour with google's virtual tour
                                </p>
                                <p>
                                    <a href="#">Check Example...</a>
                                </p>
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
                                <h2 class="title">What is Google Business View?</h2>
                                <p class="subtitle">any business needs a proper presentation of their brand what google gives you</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                        <h4>
                            <i class="fa fa-folder-open text-primary"></i>About Google Business View</h4>
                        <p>
                            Google Business View virtual tours are ultimate for any business or brand with a physical location open to the public.Whether its buying a car, a dinner reservation, event tickets, or vacations, the Internet has changed how we decide to buy. Each search is always a new opportunity to reach consumers when they’re most engaged. When you consider this, it’s no surprise that businesses of all kinds are adopting this.
                        </p>

                    </div>
                    <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                        <h4>
                            <i class="fa fa-pie-chart text-primary"></i>Where can you see that?</h4>
                        <p>
                            The Virtual Tour will be visible on GOOGLE SEARCH, GOOGLE MAPS and GOOGLE+ LOCAL to give consumers an improved wisdom of FLOOR, PRODUCTS, SERVICES, EMBELLISHMENT and AMBIENCE of your business premise. Google Business View can be easily embedded on your own website, blogs and social media to magnetize even more potential customers.
                        </p>
                    </div>
                    <div class="col-sm-12"></div>
                    <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                        <h4>
                            <i class="fa fa-cogs text-primary"></i>Google Street  View Technology - Now inside your business too.</h4>
                        <ul class="arrow-1">
                            <li>High quality 360 Degree, Panoramic tours help showcase the best features of your business</li>
                            <li>Have potential customers visit your business directly from street view</li>
                            <li>All of your images go through Google blurring and privacy standards give you peace of mind</li>
                            <li>Featuring the familiar Google Street view navigation, allowing your customers to easily explore</li>
                        </ul>


                    </div>
                    <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                        <h4>
                            <i class="fa fa-map text-primary"></i>Engage with your Customers – A new experience for customers</h4>

                        <ul class="arrow-1">
                            <li>Customers can take a panoramic virtual tour of your business – an online walkthrough of your space</li>
                            <li>Street view navigation makes it’s easily and intuitive for customers to see your business before visiting</li>
                            <li>A gear way to showcase your décor, ambience, and the unique qualities of your business</li>
                        </ul>


                    </div>
                    <div class="col-sm-12"></div>
                    <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                        <h4>
                            <i class="fa fa-exclamation-circle text-primary"></i>Share with the World – easy for potential customers to find</h4>
                        <ul class="arrow-1">
                            <li>Images appear directly on Google Search Results</li>
                            <li>Searchable on Google Maps and Google+ Local</li>
                            <li>Prominently featured on your Google+ Page</li>
                            <li>Easy to embed on your website</li>
                            <li>Link to share on social networks, blogs, emails and more!</li>


                        </ul>
                        
                    </div>
                    <div class="col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                        <h4>
                            <i class="fa fa-database text-primary"></i>Who can opt Google Business View?</h4>
                        <ul class="arrow-1">
                            <li>Hotels</li>
<li>Real Estate</li>
<li>Showrooms/Stores</li>
<li>Restaurants/Bars</li>
<li>Movie Halls</li>
<li>Shopping Malls And Any Other Property</li>

                        </ul>
                    </div>
                    <div class="col-sm-12"></div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="cta-1">
                    <figure data-aos="flip-right" data-aos-duration="3000">
                        <a href="Content/images/insights/2.jpg" title="Aliquam pulvinar orci ut nisl imperdiet" class="lightbox-image">
                            <img src="Content/images/insights/2.jpg" alt="Aliquam pulvinar orci ut nisl imperdiet"/>
                        </a>
                    </figure>
                    <p class="title" data-aos="fade-up" data-aos-duration="2000">WHAT? HOW? WHERE?</p>
                    <p data-aos="fade-up" data-aos-duration="2000">Studies show that half of customers visit their business site within the same day of their search and out of half of local searches lead to a purchase within the same day. You will get benefit from the interaction of your business list that receives as the virtual tour drives more traffic.   This increase in engagement, in turn, results in more reviews of your business. More reviews can be good, but it can also be bad. With a virtual tour your customer knows what to expect before they visit and is less likely to have disappoint or to feel misled.  </p>
                    <p data-aos="fade-up" data-aos-duration="2000">Picking the correct eatery, bistro or inn is regularly intense. Build trust with a top notch virtual visit that gives individuals a chance to encounter your area before they arrive.</p>

                    <p data-aos="fade-up" data-aos-duration="2000">These immersive, virtual encounters move more prominent certainty among imminent visitors and supporters. A trusted professional for contract can help you all the more effectively create and show your virtual tour.</p>
                    <p>
                        <a href="#" class="btn btn-primary" data-aos="fade-up" data-aos-duration="2000">Gallery</a>
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
                    <p class="icon">
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
                        <h2 class="title">Who can get the Virtual Tours?</h2>
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
                    <p>
                        Effective for  
                 
                        <span>HOTELS & REAL ESTATE </span>Business
                    </p>
                </div>
                <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">Google Business View is an addition to the highly successful street view feature, it allows a potential customer to walk in, around and to interact with your business interior, all within a 360 degree virtual environment, hosted on the world's biggest search engine.</p>
                <div class="imageMargin" data-aos="fade-up" data-aos-duration="2000">
                    <img src="Content/images/GoogleView.jpg" /></div>
            </div>
            <div class="col-lg-5">
                <p data-aos="fade-up" data-aos-duration="2000">Google Business View for Hotels can engage world tourists with its High Quality, Virtual Tour with 360 degree walk through Hotel Owners can show their most popular room types, the suite with a gorgeous view from the balcony, or your well-equipped<b> fitness center, F&B, SPA, Salon, Pool, Golf area, facade</b> , and  everything you have By this facility tourists will get all information before going anywhere and can book their favorite place visiting on Google Business View. This <span class="Fontcolorspan"> HOTEL FINDER </span>will also help you in representing your hotel in most effective TRADE SHOWS, CONFERENCES and CORPORATE MEETINGS as well.</p>

                <p data-aos="fade-up" data-aos-duration="2000">
                   Google Business View for Real Estate will engage world investors with its High Quality, Virtual Tour with 360 degree walk through. Builders can show their <b>MODEL HOUSES, APARTMENTS</b>, view from the balcony, or your well-equipped fitness center, Theatre, Garden, Pool, and Parking etc by getting those properties into Google Business View.You can also show your <b>MODEL HOUSES & APARTMENTS </b>to the visitors of any Property show where you participate so that visitors and investors can get actual idea about your property before visiting your construction site.<b><i> Less communication - more business is the motto behind this service</i></b> 
                </p>
            </div>
            <div class="col-lg-12">
                 <p >
                        <a href="#" class="btn btn-primary" data-aos="fade-up" data-aos-duration="2000">Gallery</a>
                    </p>
            </div>
        </div>
    </div>
</div>
 </React.Fragment >

        );
    }
}

