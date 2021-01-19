import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  

export class Carrier extends Component {
    static displayName = Carrier.name;

    render() {
        return (
            <React.Fragment>
              <div className="content-section titlebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
              <div id="titlebar" className="titlebar-content" data-aos="fade-up" data-aos-duration="3000">
                <img src="./Content/images/insights/about.jpg" alt="" className="titlebar-bg"/>
                <ol className="breadcrumb" data-aos="fade-up" data-aos-duration="2000">
                  <li>
                  <Link to="/home">Home</Link>
                  </li>
                 
                  <li className="active">Carrier</li>
                </ol>
                <div className="titlebar-content-wrapper">
                  <h1 className="titlebar-title" data-aos="fade-up" data-aos-duration="3000">Carrier</h1>
                  <p className="titlebar-description" data-aos="fade-up" data-aos-duration="3000">Join the cool geeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



<br></br>
                <div className="container">
                <h2 className="feaurejob" data-aos="fade-up" data-aos-duration="2000">Featured <span>jobs</span></h2>
                </div>
                
                {/* Benefits start */}
                <div className="content-section pt0 pb0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
                                <div className="benefits">
                                 
                                 <div className="col-lg-3">
                                    <div className="benefits-item">
                                        <div className="content">
                                            
                                            <h4><b>ASP.NET MVC Developer</b></h4>
                                            <p>
                                               Experience: 3 to 5
                                            </p>
                                            <p>Post: 2</p>
                                            <button className="btn btn-primary"><Link to="/aSPCarrierForm" className="vg">APPLY</Link> </button>
                                            
                                        </div>
                                        </div>
                                        </div>
                                       
                                      
                                        <div className="col-lg-3">
                                    <div className="benefits-item">
                                        <div className="content">
                                           
                                            <h4><b>Open Source Developer</b></h4>
                                            <p>
                                               Experience: 3 to 5
                                            </p>
                                            <p>Post: 2</p>
                                            <button className="btn btn-primary"><Link to="/openSourceCarrierForm" className="vg">APPLY</Link> </button>

                                        </div>
                                      
                                    </div>
                                   </div>
                                  
                                   <div className="col-lg-3">
                                    <div className="benefits-item">
                                        <div className="content">
                                          
                                            <h4><b>iOS <br></br>Developer</b></h4>
                                            <p>
                                               Experience: 3 to 5
                                            </p>
                                            <p>Post: 2</p>
                                            <button className="btn btn-primary"><Link to="/iOSCarrierForm" className="vg">APPLY</Link> </button>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-3">
                                    <div className="benefits-item">
                                        <div className="content">
                                          
                                            <h4><b>UI/UX Designer</b></h4>
                                            <p>
                                               Experience: 3 to 5
                                            </p>
                                            <p>Post: 2</p>
                                            <button className="btn btn-primary"><Link to="/uIUXCarrierForm" className="vg">APPLY</Link> </button>

                                        </div>
                                    </div>
                                   </div>
                                    <div className="col-lg-3">
                                    <div className="benefits-item">
                                        <div className="content">
                                          
                                            <h4><b>Digital Marketing(SEO) </b></h4>
                                            <p>
                                               Experience: 3 to 5
                                            </p>
                                            <p>Post: 2</p>
                                            <button className="btn btn-primary"><Link to="/digitalMarketingCarrierForm" className="vg">APPLY</Link> </button>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-3">
                                    <div className="benefits-item">
                                        <div className="content">
                                          
                                            <h4><b>Business Developer</b></h4>
                                            <p>
                                               Experience: 3 to 5
                                            </p>
                                            <p>Post: 2</p>
                                            <button className="btn btn-primary"><Link to="/businessDeveloperCarrierForm" className="vg">APPLY</Link> </button>
                                        
                                    </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="benefits-item">
                                        <div className="content">
                                         
                                            <h4><b>Android Developer</b></h4>
                                            <p>
                                               Experience: 3 to 5
                                            </p>
                                            <p>Post: 2</p>
                                            <button className="btn btn-primary"><Link to="/carrierForm" className="vg">APPLY</Link> </button>
                                        </div>
                                      
                                    </div>
                              </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Benefits end*/}
                {/*Services start*/}
               



               
             
               





           
            </React.Fragment >

        );
    }
}
