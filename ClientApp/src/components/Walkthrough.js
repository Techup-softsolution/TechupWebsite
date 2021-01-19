import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class Walkthrough extends Component {
    static displayName = Walkthrough.name;

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
                 
                  <li class="active">3D Walkthrough</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">3D Walkthrough</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">3D walkthrough is distinct as the technology which helps in chirping within the plan of the building. It is the technological progression that lets the chance to look into the designs of the property and confirm whether the plan is up to the mark or not. At TECHUP, you will dig up the opportunity to get the luxury moving picture 3D walkthrough animation for your commercial and residential property. We craft in no doubt that with our 3D Walkthrough plan, you will be able to prove the feasibility of your designing plans fits your imagination.</p>
 <p data-aos="fade-up" data-aos-duration="3000">TECHUP offers commercial and residential 3D walkthrough hallucination that will help you to peer inside your plans and check out the feasibility of the interior designs planned for structure. With 3D walkthrough rendering, a meticulous vision of the construction is predictable which helps in perceiving the inadequacy which thus leads to further development before the final plan. </p>
 <p data-aos="fade-up" data-aos-duration="3000">Earlier sessions for buildings plan evoke the handcrafted mock-ups which signify the idea of the final plan. Time by time, the presentation thoughts has tainted. With the help of 3D walkthrough, we provide our clients’ representing every minute feature of their anxious property. 

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

