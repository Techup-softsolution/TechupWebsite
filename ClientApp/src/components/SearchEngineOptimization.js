import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class SearchEngineOptimization extends Component {
    static displayName = SearchEngineOptimization.name;

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
                 
                  <li className="active">Search Engine Optimization</li>
                </ol>
                <div className="titlebar-content-wrapper">
                  <h1 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Search Engine Optimization</h1>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <h2>Comming Soon</h2>

      
      {/* <div data-aos="fade-up" data-aos-duration="2000">
      <div className="center">
      <img src="./Content/images/blog/CommingSoon.jpg" alt="Energy &amp; Utilities" />
         
         </div> 
         </div>   */}
                </React.Fragment >

        );
    }
}

