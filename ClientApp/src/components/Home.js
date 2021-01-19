import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  

export class Home extends Component {
    static displayName = Home.name;

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
                                                    <div className="slider-images-item" style={{ "backgroundImage": "url(./Content/images/slider/webdevlopment.jpg)" }}>
                                                    </div>
                                                    <div className="slider-content-wrapper">
                                                        <div className="slider-content">
                                                            <div className="slider-item aos-init aos-animate" data-aos="flip-down" data-aos-duration="2000">
                                                            <div className="title">Web Development </div>
                                                                <div className="desc">Website is like an one of the business identity. Create your stunning and attractive website through our web development services, which will help you to generate more leads.</div>
                                                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item">
                                                    <div className="slider-images-item" style={{ "backgroundImage": "url(./Content/images/slider/mobile.jpg)" }}>
                                                    </div>
                                                    <div className="slider-content-wrapper">
                                                        <div className="slider-content">
                                                            <div className="slider-item aos-init aos-animate" data-aos="flip-down" data-aos-duration="2000">
                                                            <div className="title">Mobile App Development</div>
                                                                <div className="desc">Expand your business and reach the users by attending prospects on smartphones. Design your mobile app and scale your business to a new height. Let your dreams turns into reality</div>
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item">
                                                    <div className="slider-images-item" style={{ "backgroundImage": "url(./Content/images/slider/software-development.jpg)" }}>
                                                    </div>
                                                    <div className="slider-content-wrapper">
                                                        <div className="slider-content">
                                                            <div className="slider-item aos-init aos-animate" data-aos="flip-down" data-aos-duration="2000">
                                                                <div className="title">Software Development </div>
                                                                <div className="desc">We employ industry best practices to deliver robust, secure and scalable software development services</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="owl-item">
                                                    <div className="slider-images-item" style={{ "backgroundImage": "url(./Content/images/slider/ui-ux-3.jpg)" }}>
                                                    </div>
                                                    <div className="slider-content-wrapper">
                                                        <div className="slider-content">
                                                            <div className="slider-item aos-init aos-animate" data-aos="flip-down" data-aos-duration="2000">
                                                            <div className="title">UI/UX Development</div>
                                                                <div className="desc">Our expert UI/UX developers gives an interactive design for your website, which is user-friendly having motion-graphics and visual aspects</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="owl-item">
                                                    <div className="slider-images-item" style={{ "backgroundImage": "url(./Content/images/slider/digital-marketing.jpg)" }}>
                                                    </div>
                                                    <div className="slider-content-wrapper">
                                                        <div className="slider-content">
                                                            <div className="slider-item aos-init aos-animate" data-aos="flip-down" data-aos-duration="2000">
                                                                <div className="title">Digital Marketing</div>
                                                                <div className="desc">As a one of the leading Digital marketing company, we give our best and make sure that your business looks unique. </div>
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
                {/* Slider end */}
                {/* Benefits start */}
                <div className="content-section pt0 pb0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
                                <div className="benefits">
                                    <div className="benefits-item">
                                        <div className="content">
                                            <span className="benefits-item-icon icon-iconmonstr-idea-13"></span>
                                            <h4><b>who we are</b></h4>
                                            <p>We craft captivating & scouting brands through Website, Mobile Apps, Software and branding.</p>
                                            <p>
                                                {/* <a href="#">Details...</a> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="benefits-item">
                                        <div className="content">
                                            <span className="benefits-item-icon icon-iconmonstr-idea-12"></span>
                                            <h4><b>what we do</b></h4>
                                            <p>We believe in providing best possible services to the clients on timely basis.</p>
                                            <p>
                                                {/* <a href="@Url.Action(" Index", "AboutUs", new {})">Details...</a> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="benefits-item">
                                        <div className="content">
                                            <span className="benefits-item-icon icon-iconmonstr-target-6"></span>
                                            <h4><b>how we do it</b></h4>
                                            <p>We work with high morals and ethics. Our motto of success is our client's success.</p>
                                            <p>
                                                {/* <a href="@Url.Action(" Index", "AboutUs", new {})">Details...</a> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="benefits-item">
                                        <div className="content">
                                            <span className="benefits-item-icon icon-iconmonstr-handshake-9"></span>
                                            <h4><b>why we do it</b></h4>
                                            <p>Because we believe in teamwork not only with employees but also with our clients.</p>
                                            <p>
                                                {/* <a href="@Url.Action(" Index", "AboutUs", new {})">Details...</a> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Benefits end*/}
                {/*Services start*/}
                <div className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content-section-header">
                                    <div className="content-section-header-wrapper" data-aos="fade-up" data-aos-duration="2000">
                                        <h2 className="title">our services</h2>
                                        <p className="subtitle">We offer the full continuum of services to help organizations work better.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row TextStyle">
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                                <h4 class="linehieght">
                                    <i className="fa fa-television text-primary"></i>Web Development</h4>
                                <p>Web development may use content management system (CMS) to make content changes easier and available with basic technical skills. We have built number of web applications whether it is PHP, .NET, Java or any other technology. Our team is equipped with building CMS, E-commerce and business web applications as per the solution on demands.</p>
                            </div>
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                                <h4 class="linehieght">
                                    <i className="fa fa-mobile text-primary"></i>Mobile App Development</h4>
                                <p>Enterprise mobility is the next leap towards which the entire IT sector is marching. Techup helps every business owner to achieve their goal in enterprise mobility. We have built mobile responsive, lucrative and interactive apps that the end-users like and adapt quickly. We have worked with some popular brands; you can check out the experience and reputations of Techup in our client.</p>
                            </div>
                            <div className="col-lg-12 visiblle-sm visible-md"></div>
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                                <h4 class="linehieght">
                                    <i className="fa fa-television text-primary"></i> Software Development</h4>
                                <p>Our Software Developers are experienced in building fully-rendered Software. Our services are not limited to the following: conceptual and visual outlining. Software Development gives interaction design, and platform development</p>
                            </div>
                            <div className="col-lg-12 visible-lg"></div>
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                                <h4 class="linehieght">
                                    <i className="fa fa-empire text-primary"></i>UI/UX Design</h4>
                                <p>Despite it being an older and more practiced field, the question of “What is user interface design?” is difficult to answer because of its broad variety of misinterpretations. While User Experience is a conglomeration of tasks focused on the optimization of a product for effective and enjoyable use, User Interface Design is its complement; the look and feel, the presentation and interactivity of a product. Our creative team not only designs user interface but also design digital experience around the users.</p>
                            </div>
                            <div className="col-lg-12 visiblle-sm visible-md"></div>
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                                <h4 class="linehieght">
                                    <i className="fa fa-lightbulb-o text-primary"></i>Digital Marketing</h4>
                                <p>As a one of the leading Digital marketing company, we give our best and make sure that your business looks unique. Our digital marketing executives are constantly thinking of new and effective way to navigate the online maze to communicate and grow online. Techup is a digital marketing agency devoted to developing relationships to our client’s. Building trust with community requires honesty, consistency, clarity and transparency.</p>


                            </div>
                            {/* <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
                                <h4 class="linehieght">
                                    <i className="fa fa-database text-primary"></i>Content & Copywriting</h4>
                                <p>Copywriting defines as scripting for the promotional advertising or marketing. The intention of content writing is to consider and attract the online audiences so they stay longer on websites and engage with your brand. With the experience in content writing TECHUP gives the best of their Article Writing, Blog Writing, Copywriting, Social Media Posts, Professional Content Writing, Website Content Writing, Product Descriptions and SEO Contents.</p>
                            </div> */}
                            <div className="col-xs-6">
                                <p>
                                    {/* <a href="#" className="btn btn-primary">discover more</a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Services end*/}
                {/*Industries start*/}
                {/* <div className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
                                <div className="industries carousel">
                                    <div className="industries-images">
                                        <div id="industries-images" className="owl-carousel owl-theme">
                                            <div className="industries-images-item">
                                                <img src="./Content/images/industries/automotive.jpg" alt="Automotive" />
                                                <div className="industries-images-item-content">
                                                    <p className="title">
                                                        <a href="#" title="Automotive">Automotive</a>
                                                    </p>
                                                    <p className="counter">
                                                         <i className="fa fa-folder-o"></i> 25 Cases 
                                                        </p>
                                                    <p className="link">
                                                        <a href="#">Learn more...</a> 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="industries-images-item">
                                                <img src="./Content/images/industries/chemicals.jpg" alt="Chemicals" />
                                                <div className="industries-images-item-content">
                                                    <p className="title">
                                                        <a href="#" title="Chemicals">Chemicals</a>
                                                    </p>
                                                    <p className="counter">
                                                         <i className="fa fa-folder-o"></i> 19 Cases 
                                                        </p>
                                                    <p className="link">
                                                        {<a href="#">Learn more...</a> 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="industries-images-item">
                                                <img src="./Content/images/industries/energy.jpg" alt="Energy &amp; Utilities" />
                                                <div className="industries-images-item-content">
                                                    <p className="title">
                                                        <a href="#" title="Energy &amp; Utilities">Energy & Utilities</a>
                                                    </p>
                                                    <p className="counter">
                                                        <i className="fa fa-folder-o"></i> 31 Cases 
                                                        </p>
                                                    <p className="link">
                                                         <a href="#">Learn more...</a> 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="industries-images-item">
                                                <img src="./Content/images/industries/healthcare.jpg" alt="Healthcare" />
                                                <div className="industries-images-item-content">
                                                    <p className="title">
                                                        <a href="#" title="Healthcare">Healthcare</a>
                                                    </p>
                                                    <p className="counter">
                                                         <i className="fa fa-folder-o"></i> 11 Cases 
                                                        </p>
                                                    <p className="link">
                                                         <a href="#">Learn more...</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="industries-images-item">
                                                <img src="./Content/images/industries/manufacturing.jpg" alt="Manufacturing" />
                                                <div className="industries-images-item-content">
                                                    <p className="title">
                                                        <a href="#" title="Manufacturing">Manufacturing</a>
                                                    </p>
                                                    <p className="counter">
                                                         <i className="fa fa-folder-o"></i> 53 Cases 
                                                        </p>
                                                    <p className="link">
                                                        <a href="#">Learn more...</a> 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="industries-images-item">
                                                <img src="./Content/images/industries/telecommunications.jpg" alt="Telecommunications" />
                                                <div className="industries-images-item-content">
                                                    <p className="title">
                                                        <a href="#" title="Telecommunications">Telecommunications</a>
                                                    </p>
                                                    <p className="counter">
                                                       <i className="fa fa-folder-o"></i> 29 Cases 
                                                        </p>
                                                    <p className="link">
                                                         <a href="#">Learn more...</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="industries-title" data-aos="fade-up" data-aos-duration="2000">
                                        <h2>Our areas of experience</h2>
                                        <p>Since 2013 TECHUP has worked with various Industries and have that knowledge in which industry what technology and product will be helpful to them. We have worked with the industries like Healthcare, Automobile, Chemicals, Finance, Manufacturing, Telecommunication, Food & Beverages, Real Estate and Hospitality industries.</p>
                                        <div id="industries-nav" className="industries-nav owl-nav"></div>
                                    </div> 
                                </div>
                            </div>
                        </div> */}




                        
                        {/* <div className="row">
                            <div className="col-lg-10 col-lg-push-1" data-aos="fade-up" data-aos-duration="2000">
                                <p className="content-block-excerpt">We are a leading global provider of IT and Support consultancy services to businesses withing a broad range of manufacturing, Service and commercial industries.</p>
                            </div>
                        </div> */}
                        {/* <div className="row">
                            <div className="col-lg-5 col-lg-push-1" data-aos="fade-up" data-aos-duration="2000">
                                <p>
                                    <strong className="text-heading">We work with high morals and ethics. We believe in providing best possible services to the clients on timely basis. Come and join us, together we can explore new heights.</strong>
                                </p>
                                <p>We cherish talking about and arranging new undertakings and have years of information and experience that we convey to the table.</p>
                            </div>
                            <div className="col-lg-5 col-lg-push-1" data-aos="fade-up" data-aos-duration="2000">
                                <p>Whether it�s a website or a graphic design, system development or custom programming, we like to keep everything under one roof to make it easier for our customers.
                                Whether it�s a website or a graphic design, system development or custom programming, we like to keep everything under one roof to make it easier for our customers.Whether it�s a website or a graphic design, system development or custom programming, we like to keep everything under one roof to make it easier for our customers.
                </p>
                            </div>
                        </div>
                    
                    
                     */}
                    {/* </div>
                </div> */}
                {/* Industries end */}


                {/* <div className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="content-section-header">
                <div className="content-section-header-wrapper">
                  <h2 className="title">featured insights</h2>
                  <p className="subtitle">Ideas and breakthroughs fueled by 5+ years of total experience.</p>
                </div>
                <div id="featured-insights-nav" className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev">


                        
                        <i className="fa fa-angle-left"></i></button>
                        <button type="button" role="presentation" className="owl-next">
                            <i className="fa fa-angle-right"></i></button></div> */}
                {/* <div id="featured-insights-nav" class="owl-nav"></div> */}
              {/* </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
              <div id="featured-insights" className="content-carousel owl-carousel owl-theme">
                <div className="project">
                  <div className="project-details">
                    <figure className="post-thumbnail">
                      <img src="Content/images/insights/1.jpg" alt=""/>
                      <div className="hover">
                        <a href="Content/images/insights/1.jpg" title="" className="lightbox-image">
                          <span className="icon-iconmonstr-fullscreen-7"></span>
                        </a>
                        <a href="">
                          <span className="icon-iconmonstr-link-1"></span>
                        </a>
                      </div>
                    </figure>
                    <div className="project-type">
                      <span>Article</span>
                    </div>
                    <br></br>
                    <h4>
                      <a href="" title="">Software! Backbone of today’s world</a>
                    </h4>
                    <p>TECHUP TECHNOLOGIES helps you create your interactive and intellectual software with ...</p>
                  </div>
                  <div className="project-meta">
                    <ul className="post-meta">
                      <li className="meta-date">June 20'18</li>
                      <li className="meta-category">
                        <a href="#">Software</a>
                      </li>
                      <li className="meta-author">
                        <a href="#">TECHUP</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project">
                  <div className="project-details">
                    <figure className="post-thumbnail">
                      <img src="Content/images/insights/2.jpg" alt=""/>
                      <div className="hover">
                        <a href="Content/images/insights/2.jpg" title="" className="lightbox-image">
                          <span className="icon-iconmonstr-fullscreen-7"></span>
                        </a>
                        <a href="">
                          <span className="icon-iconmonstr-link-1"></span>
                        </a>
                      </div>
                    </figure>
                    <div className="project-type">
                      <span>Brief</span> 
                    </div>
                    <br></br>
                    <h4>
                      <a href="" title="">Imagining a software and can’t convert into reality? </a>
                    </h4>
                    <p>TECHUP TECHNOLOGIES is the organization that provides virtual technological help ... </p>
                  </div>
                  <div className="project-meta">
                    <ul className="post-meta">
                      <li className="meta-date">June 08 '18</li>
                      <li className="meta-category">
                        <a href="#">Software</a>
                      </li>
                      <li className="meta-author">
                        <a href="#">TECHUP</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project">
                  <div className="project-details">
                    <figure className="post-thumbnail">
                      <img src="Content/images/insights/3.jpg" alt=""/>
                      <div className="hover">
                        <a href="Content/images/insights/3.jpg" title="" class="lightbox-image">
                          <span className="icon-iconmonstr-fullscreen-7"></span>
                        </a>
                        <a href="">
                          <span className="icon-iconmonstr-link-1"></span>
                        </a>
                      </div>
                    </figure>
                    <div className="project-type">
                     <span>Product</span>
                    </div>
                    <br></br>
                    <h4>
                      <a href="" title="">360 Virtual Tour – A New way of Hotel & Real Estate Marketing</a>
                    </h4>
                    <p>For the first time, a 360 Virtual Tour is letting you go to each and every place that you wish to visit ...</p>
                  </div>
                  <div className="project-meta">
                    <ul className="post-meta">
                      <li className="meta-date">May 21 '18</li>
                      <li className="meta-category">
                        <a href="#">Hospitality</a>
                      </li>
                      <li className="meta-author">
                        <a href="#">TECHUP</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project">
                  <div className="project-details">
                    <figure className="post-thumbnail">
                      <img src="Content/images/insights/4.jpg" alt=""/>
                      <div className="hover">
                        <a href="Content/images/insights/4.jpg" title="" className="lightbox-image">
                          <span className="icon-iconmonstr-fullscreen-7"></span>
                        </a>
                        <a href="">
                          <span className="icon-iconmonstr-link-1"></span>
                        </a>
                      </div>
                    </figure>
                    <div className="project-type">
                       <span>Brief</span>
                    </div>
                    <br></br>
                    <h4>
                      <a href="" title="">Why you need SEO?</a>
                    </h4>
                    <p>The landscape of Online Marketing changes very fast; as a business owner ...</p>
                  </div>
                  <div className="project-meta">
                    <ul className="post-meta">
                      <li className="meta-date">Jan 09 '18</li>
                      <li className="meta-category">
                        <a href="#">SEO</a>
                      </li>
                      <li className="meta-author">
                        <a href="#">TECHUP</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project">
                  <div className="project-details">
                    <figure className="post-thumbnail">
                      <img src="Content/images/insights/5.jpg" alt=""/>
                      <div className="hover">
                        <a href="Content/images/insights/5.jpg" title="" className="lightbox-image">
                          <span className="icon-iconmonstr-fullscreen-7"></span>
                        </a>
                        <a href="">
                          <span className="icon-iconmonstr-link-1"></span>
                        </a>
                      </div>
                    </figure>
                    <div className="project-type">
                       <span>Announcement</span> 
                    </div>
                    <br></br>
                    <h4>
                      <a href="" title="">Announcing our new logo and look!</a>
                    </h4>
                    <p>Big news! Today, following 4 years, we’re releasing a refreshed brand character ...</p>
                  </div>
                  <div className="project-meta">
                    <ul className="post-meta">
                      <li className="meta-date">Jul 31 '17</li>
                      <li className="meta-category">
                        <a href="#">Design</a>
                      </li>
                      <li className="meta-author">
                        <a href="#">TECHUP</a>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div> */}









               
                {/* Insights start */}
                {/* Company stats start */}
                <div className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
                                <div className="stats">
                                    <div className="stats-item">
                                        <img src="./Content/images/icons/iconmonstr-user-29-32.png" alt="" />
                                        <div className="stats-item-content">
                                            <span className="digit">70+</span>
                                            <span className="text">Happy Client </span>
                                        </div>
                                    </div>
                                    <div className="stats-item">
                                        <img src="./Content/images/icons/iconmonstr-education-1-32.png" alt="" />
                                        <div className="stats-item-content">
                                            <span className="digit">100+</span>
                                            <span className="text">Projects Completed </span>
                                        </div>
                                    </div>
                                    <div className="stats-item">
                                        <img src="./Content/images/icons/customerSatisfication.png" alt="" />
                                        <div className="stats-item-content">
                                            <span className="digit"> 100%</span>
                                            <span className="text">Customer Satisfaction</span>
                                        </div>
                                    </div>
                                    <div className="stats-item">
                                        <img src="./Content/images/icons/cupoftea.jpg" alt="" />
                                        <div className="stats-item-content">
                                            <span className="digit">500+</span>
                                            <span className="text">Cup Of Tea  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Company stats end */}
                {/* FAQ & News start */}
                {/* <div class="content-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div id="partners" class="partners owl-carousel owl-theme visivleLogos">
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/1.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/2.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/3.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/4.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/5.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/6.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/7.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/8.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/9.png" alt="Logo"/>
                </div>
              </div>
              <div id="partners-dots" class="owl-dots center"></div>
            </div>
          </div>
        </div>
      </div> */}
                {/* FAQ & News end */}
                {/* Partners start */}
{/* 
                <div class="content-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div id="partners" class="partners owl-carousel owl-theme visivleLogos">
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/1.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/2.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/3.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/4.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/5.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/6.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/7.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/8.png" alt="Logo"/>
                </div>
                <div class="partner-item" data-aos="fade-up" data-aos-duration="2000">
                  <img src="Content/images/partners/9.png" alt="Logo"/>
                </div>
              </div>
              <div id="partners-dots" class="owl-dots center"></div>
            </div>
          </div>
        </div>
      </div>
                */}
                {/* Subscribe start */}
                {/* <div className="content-section" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" >
                                <div className="newsletters-subscribe" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <h3 className="mt0">subscribe to newsletters</h3>
                                            <p className="mt0">Stay informed about our news and events</p>
                                        </div>
                                        <div className="col-lg-8">
                                            <form>
                                                <input type="email" placeholder="Enter your email for newsletters subscription..." className="form-control" />
                                                <button type="submit" className="btn btn-secondary">
                                                    <i className="fa fa-check"></i> Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                


<div className="content-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-section-header" data-aos="fade-up" data-aos-duration="2000">
                    <div className="content-section-header-wrapper" >
                        <h2 className="title">clients testimonials</h2>
                        <p className="subtitle">we believe in the essential work of our clients</p>
                    </div>
                    <div id="testimonials-nav" className="owl-nav margin-top-0"></div>
                </div>
            </div>
        </div>






        
        
        <div className="row">
            <div className="col-lg-12">
                <div id="testimonials" className="content-carousel owl-carousel owl-theme">
                    <div className="testimonials-item" >
                        <figure>
                            <a href="./Content/images/team/1.jpg" className="lightbox-image">
                                <img src="./Content/images/team/1.jpg" alt=""/>
                            </a>
                        </figure>
                        <div className="content">
                            <p className="name">Jim D. Mendez</p>
                            <p className="position">Foot doctor, Home Quarters Warehouse</p>
                            <p className="text">" You guys rock! Thank You! It's exactly what I've been looking for. It's the perfect solution for our business. ""</p>
                        </div>
                    </div>
                    <div className="testimonials-item" >
                        <figure>
                            <a href="Content/images/team/2.jpg" className="lightbox-image">
                                <img src="./Content/images/team/2.jpg" alt=""/>
                            </a>
                        </figure>
                        <div className="content">
                            <p className="name">Frances J. Allen</p>
                            <p className="position">Welding machine setter, Expo Superstore</p>
                            <p className="text">" I don't always clop, but when I do, it's because of Thompson. Thompson has really helped our business. We're loving it. ""</p>
                        </div>
                    </div>
                    <div className="testimonials-item" >
                        <figure>
                            <a href="./Content/images/team/3.jpg" className="lightbox-image">
                                <img src="./Content/images/team/3.jpg" alt="" />
                            </a>
                        </figure>
                        <div className="content">
                            <p className="name">Melvin C. Cobb</p>
                            <p className="position">Livestock farmer, Monk House Sales</p>
                            <p className="text">" The best on the net! I didn't even need training. Thompson is the most valuable business resource we have EVER purchased. ""</p>
                        </div>
                    </div>
                    <div className="testimonials-item" >
                        <figure>
                            <a href="./Content/images/team/4.jpg" className="lightbox-image">
                                <img src="./Content/images/team/4.jpg" alt=""/>
                            </a>
                        </figure>
                        <div className="content">
                            <p className="name">Alicia C. Folsom</p>
                            <p className="position">Support staff clerk, Bodega Club</p>
                            <p className="text">" Best. Product. Ever! Your company is truly upstanding and is behind its product 100%. I don't know what else to say. "</p>
                        </div>
                    </div>
                    <div className="testimonials-item" >
                        <figure>
                            <a href="./Content/images/team/5.jpg" className="lightbox-image">
                                <img src="./Content/images/team/5.jpg" alt=""/>
                            </a>
                        </figure>
                        <div className="content">
                            <p className="name">Gregory K. Homan</p>
                            <p className="position">Greeter, Omni Architectural Designs</p>
                            <p className="text">" I made back the purchase price in just 48 hours! No matter where you go, Thompson is the coolest thing around! "</p>
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
