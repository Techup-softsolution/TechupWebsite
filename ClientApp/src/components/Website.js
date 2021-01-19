import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class Website extends Component {
    static displayName = Website.name;

    render() {
        return (
            <React.Fragment>
 <div className="content-section titlebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
              <div id="titlebar" className="titlebar-content" data-aos="fade-up" data-aos-duration="3000">
                <img src="./Content/images/insights/4.jpg" alt="" className="titlebar-bg"/>
                <ol className="breadcrumb" data-aos="fade-up" data-aos-duration="2000">
                  <li>
                  <Link to="/home">Home</Link>
                  </li>
                 
                  <li className="active">Website</li>
                </ol>
                <div className="titlebar-content-wrapper">
                  <h1 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Website Development and Design</h1>
                  <p className="titlebar-description" data-aos="fade-up" data-aos-duration="3000">Innovative solutions to move your business forward</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-section-header" data-aos="fade-up" data-aos-duration="3000">
                <div className="content-section-header-wrapper" >
                  <h3>what we do</h3>
                </div>
              </div>
              <p className="website" data-aos="fade-up" data-aos-duration="3000" >Whether you require website development solution or you need customised website development from its start, we will help you begin it in the best approach. Innovated with the most professional and advanced resources, you will get the most satisfactory results for your online brand image. We help you with website solutions that are exactly same as you are looking for. TECHUP TECHNOLOGIES is a renowned offshore web development company, engaged in providing incredible website development solutions.
</p><p data-aos="fade-up" data-aos-duration="3000">TECHUP offers you wide range of Web Development in Static and Dynamic concepts that will be easy for you, flexible to access, helping you with payment gateways too and creates value for your business. You will have great experience with the team of Website developers, who are associated with the organization to create innovative designs for you.
</p>
              <ul className="arrow-1">
                <li data-aos="fade-up" data-aos-duration="3000">Effortless to Use
                  <p className="MarginRedus">TECHUP helps for intuitive control for making and adding product features and images with description in your websites. We have the team who suggests the best in terms of quality and innovations that will add an extra look for your website.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000"> Vast Product Options
                     <p className="MarginRedus">Sizes, colours, description and other details of your products can easily be attached in the websites as different options are available with us for you. You can bifurcate price bars in your website that will be easy for customers to view the product range available with you.</p>
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Payment Gateways are Inbuilt

                    <p className="MarginRedus">TECHUP helps you create the website that has in built payment method. It is easy to accept the orders with credit card and debit cards reliably using the website payment gateways like PayPal or Stripe. Be stressfree for payment gateway when you are giving websites designing to us. We help you with all the required credentials for your websites.</p>
                </li >
                <li data-aos="fade-up" data-aos-duration="3000">We help with Valuable Content
                    <p className="MarginRedus">We will help you with packaging our knowledge of content development in a way that sells, despite of your niche or your level of expertise. Content is the heart of the website that will help you attract more customer views. </p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Helps you with Building a Credential Course
                    <p className="MarginRedus">TECHUP helps you get your products and sales processes set up in few minutes using the simple tools available in your websites, and we will make you realize how easy it really is! With the help of all this credential courses you will have all your processes very easy to use.  </p>

                </li>
                <li data-aos="fade-up" data-aos-duration="3000">Sales will be Automated
                    <p className="MarginRedus">TECHUP helps you automate everything that you do with your business. Traffic Hack is now no more the problem. We will create the websites that will be easy to use even when you redirect it in your sleep.</p>
                </li>
              </ul>
              
              <div className="cta-1">
                <p className="title" data-aos="fade-up" data-aos-duration="3000">A development upgrading is exhausted if it cannot be continuous</p>
                <p data-aos="fade-up" data-aos-duration="3000">TECHUP TECHNOLOGIES is a well known IT company, specialized in Website Designing, Website Development, E-Commerce Solutions, Website Redesign and Website Maintenance</p>
                <div className="iframe-wrapper" data-aos="zoom-in" data-aos-duration="3000">
                  <iframe src="https://player.vimeo.com/video/194468163?color=ffffff&amp;portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
              </div>
              {/* <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="3000">We at TECHUP TECHNOLOGIES always welcome people who really want to start something and looking for a space on Internet. We help them for starting their business and promote it on the Global Platforms. We always appreciate the talented people who have a great idea and looking to do something big. </p> */}
              
             
             
            </div>
            <div className="col-lg-4" >
              <div id="sidebar" className="sidebar sidebar-right" >
                <aside className="widget widget-pages" data-aos="flip-right" data-aos-duration="3000">
                
                  <img src="./Content/images/website.jpg" />
                </aside>
                <aside className="widget" data-aos="flip-right" data-aos-duration="3000">
                  <h4 className="widget-title">related services</h4>
                  <div className="widget-content">
                   <ul className="arrow-1">
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
