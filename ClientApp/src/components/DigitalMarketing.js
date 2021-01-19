import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class DigitalMarketing extends Component {
    static displayName = DigitalMarketing.name;

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
                 
                  <li class="active">Digital Marketing</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Digital Marketing</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">Digital marketing, the encouragement of products or brands or services via one or more forms of electronic media, differs from conventional marketing in that it uses channels and systems that allow an organization to evaluate marketing campaigns and recognize what is working and what isn’t – typically in real time.
</p>
              <ul class="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Why Digital Marketing?
                  <p class="MarginRedus">Digital media is so persistent that clients have access to information any instance and any place they want that. Those days are over when people get the messages your products or services received from you and consisted of barely what you required them to know. Digital media is an ever-growing foundation of hospitality, entertainment, shopping and social discussions, and patrons are now uncovered not just to what your corporation says about your brand, but what the media, friends, relatives, peers, etc., are saying as well. Public want product they can trust. Business that recognize them, interactions that are bespoke and appropriate, and offers personalized to their requirements and preferences.</p>
               
                <p class="MarginRedus" data-aos="fade-up" data-aos-duration="3000"><b>What can be done in Digital Marketing?</b> </p>
                     <p class="MarginRedus" data-aos="fade-up" data-aos-duration="3000">UI Design is difficult and time consuming; and wants intelligent use of graphic interface design, look and feel design, creating prototypes and usability testing, user analysis and so on. If you are designing a new app or software, you may consider contacting us for the UI design of your product. </p>
<p class="MarginRedus" data-aos="fade-up" data-aos-duration="3000">UX design to us means making sure a nice and joyful experience for clients while they exploit Websites, Apps, Software Products or any services. Designing for user’s expediency with aspire to give them pleasant experience is the root of our UX tactics.
</p>
                 </li>
                <li data-aos="fade-up" data-aos-duration="3000">Search Engine Optimization - SEO

                    <p class="MarginRedus">Raise traffic to your website and create more leads, generate revenues, sign-ups with SEO services.</p>
                </li >
                <li data-aos="fade-up" data-aos-duration="3000">Social Media Marketing
                    <p class="MarginRedus">If you want your advertisement to reach out to your potential customers, you need to do your social media marketing efficiently. </p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Google AdWords - Pay Per Click
                    <p class="MarginRedus">Pay per click (PPC) advertising can work wonders for you if you hire the right PPC Advertising Company.</p>

                </li>
                  
                              </ul>
              
              
             
              
             
             
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
