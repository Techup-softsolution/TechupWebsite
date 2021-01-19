import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class CorporateFilms extends Component {
    static displayName = CorporateFilms.name;

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
                 
                  <li class="active">Corporate Films</li>
                </ol>
                <div class="titlebar-content-wrapper" >
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Corporate Films</h1>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">A corporate film is an audio-visual marketing tool used by organization predominantly in the website, YouTube, meetings or other similar media created primarily for marketing aspect. Such corporate films are an excellent way to portray your existing services to new and your prospective clients and also useful while you are introducing a new product/service in the market. The best part is that it offers a great flexibility in terms of chiseling images, sound effects, lighting, textual content and range of language. It can be used as a strong market tool in the exhibitions, seminars, conferences, meetings or can also be merely played in backgrounds in the reception areas.</p>
 <p data-aos="fade-up" data-aos-duration="3000">At TECHUP our team understands our client’s requirements and accordingly we create a creative which will connect and create a link between the client’s product and their prospective customers. From conducting a deep research to understand the prospective clients, to creating an effective </p>
 <p data-aos="fade-up" data-aos-duration="3000">From conducting profound investigate in order to understand the potential customer, to creating an effective storyline followed by managing the complete production effort, and to finally provide the post-production services; we take care of all of it.


</p>
               
           
              
              
              <p class="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUPTECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p>
              
             
             
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

