import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class GoogleAdWords extends Component {
    static displayName = GoogleAdWords.name;

    render() {
        return (
         
            <React.Fragment>
        <div class="content-section titlebar">
        <div class="container">
          <div class="row">
            <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
              <div id="titlebar" class="titlebar-content" data-aos="fade-up" data-aos-duration="3000">
                <img src="./Content/images/insights/4.jpg" alt="" class="titlebar-bg"/>
                <ol class="breadcrumb" data-aos="fade-up" data-aos-duration="2000">
                  <li>
                  <Link to="/home">Home</Link>
                  </li>
                 
                  <li class="active">Google AdWords (PPC)</li>
                </ol>
                <div class="titlebar-content-wrapper">
                  <h1 class="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Google AdWords (PPC)</h1>
                  <p class="titlebar-description" data-aos="fade-up" data-aos-duration="3000">Innovative solutions to move your business forward</p>
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
              <p className="website" data-aos="fade-up" data-aos-duration="3000">Pay-Per-Click or PPC strategy and Google Adword are an integral part of a solid advertising campaign. If you are ready to start marketing your website, TECHUP will help you develop the most effective PPC strategy and implement it quickly. We have widespread experience in managing PPC campaigns and can bring you the most impressive results.
</p>
                 <p data-aos="fade-up" data-aos-duration="3000">PPC campaign is one of the efficient ways to make your business visible to the target audience. However, it’s not as effortless as it might seem at the first glance. Finding the right advertising partners can take weeks and might not bring you satisfactory results.
</p>
                 <p data-aos="fade-up" data-aos-duration="3000">Google Adword is one of the most profitable approaches to any prosperous business today which we have conducted efficiently with the latest structure required. We have a team of highly experienced people who make our firm a reliable.</p>

                      <p data-aos="fade-up" data-aos-duration="3000">At TECHUP we manage your Google AdWords account targeting the keywords that will drive buyers to your site. Highly focused keyword research will determine the most cost-effective approach to obtaining customers who are searching for exactly what you offer. Through the various research tools we use, we will develop effective paid search campaigns focused on meeting your target cost per sale or lead. By investing in Google AdWords, you will assist highly eager buyers in finding your site who wouldn't necessarily find it through traditional (organic) search engine optimization techniques.
</p>
                      <p data-aos="fade-up" data-aos-duration="3000">Acquiring traffic through Google AdWords, PPC and social media ads is only half of the battle of digital marketing. We use proven principles from web design, psychology and improve the conversion rates of your website traffic.
</p>
                      
              

              






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
                   <li> <Link to="/website">Website Development</Link></li>
                   <li> <Link to="/software">Software Development</Link></li>
                   <li> <Link to="/androidApps">Android Development</Link></li>
                   <li> <Link to="/iOSApps">iOS Development</Link></li>
                   <li> <Link to="/maintananceAndSuport">Maintanance & Suport</Link></li>
                   <li> <Link to="/uIUXDesign">UI/UX Design</Link></li>
                   <li> <Link to="/softwareArchitecture">Software Architecture</Link></li>
                       
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

