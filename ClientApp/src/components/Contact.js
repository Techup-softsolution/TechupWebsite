import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (
            <React.Fragment>

<div className="content-section titlebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"data-aos="fade-up" data-aos-duration="1000">
              <div id="titlebar" className="titlebar-content" data-aos="fade-up" data-aos-duration="3000">
                <img src="./Content/images/insights/4.jpg" alt="" class="titlebar-bg"/>
                <ol className="breadcrumb" data-aos="fade-up" data-aos-duration="2000">
                  <li>
                  <Link to="/home">Home</Link>
                  </li>
                 
                  <li className="active">Contact us</li>
                </ol>
                <div className="titlebar-content-wrapper" data-aos="fade-up" data-aos-duration="3000">
                
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="content-section pt0 pb0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
                           
                                <div className="benefits">
                                    <div className="benefits-item">
                                        <div className="content">
                                          
                                                <span>
                                                <img className="locationw" src="./Content/images/icons/location.png" alt="" />
                                                </span>
                                            <h4><b>Office Location</b></h4>
                                            <p>407.Aarohi Verve,Beside One World West,S.P.Ring Road,Ambali,Ahmedabad India</p>
                                            <p>
                                             
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="benefits-item">
                                        <div className="content">
                                            <span className="benefits-item-icon icon-iconmonstr-idea-12"></span>
                                            <h4><b>what we do</b></h4>
                                            <p>We believe in providing best possible services to the clients on timely basis.</p>
                                            <p>
                                              
                                            </p>
                                        </div>
                                    </div>
                                    <div className="benefits-item">
                                        <div className="content">
                                            <span className="benefits-item-icon icon-iconmonstr-target-6"></span>
                                            <h4><b>how we do it</b></h4>
                                            <p>We work with high morals and ethics. Our motto of success is our client's success.</p>
                                            <p>
                                               
                                            </p>
                                        </div>
                                    </div>
                                    <div className="benefits-item">
                                        <div className="content">
                                            <span className="benefits-item-icon icon-iconmonstr-handshake-9"></span>
                                            <h4><b>why we do it</b></h4>
                                            <p>Because we believe in teamwork not only with employees but also with our clients.</p>
                                            <p>
                                               
                                            </p>
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
            <img className="contactusimage" src="./Content/images/icons/contact_corner_img.png" alt="" /><br></br>
              <div className="map-wrapper">
             
                <div data-aos="flip-right" data-aos-duration="3000" id="map-canvas" class="map-canvas"></div>
               
                <div className="map-info" data-aos="flip-right" data-aos-duration="3000">
              
                  <h2>Techup Software Solutions</h2>
                  <div className="info address">
                    <span>407.Aarohi Verve,Beside One World West,S.P.Ring Road,Ambali,Ahmedabad
India</span>
                  </div>
                  <div className="info phone">
                    <span> (+91) 909-901-1665</span>
                  </div>
                  <div className="info email">
                    <span>
                      <a href="#">business@techupsoftsolution.com</a>
                    </span>
                  </div>
                  <div class="info opening-hours">
                    <span>Monday to Friday from 10.00am to 7.00pm</span>
                  </div>
                    {/* <div class="info address"> */}
                    {/* <span>Gujrat</span>&nbsp; */}
                     {/* <span> Gujrat</span>&nbsp; |&nbsp; <span> San Jose, CA</span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* 
      <div className="content-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
                <div className="cta-3">
                    <div className="first">
                        <div className="content pTagAlign" data-aos="fade-up" data-aos-duration="2500">
                            <h3 className="contactHeader">Get in Touch</h3><br></br>
                            <h6>Tell us about your project. We usually respond to every inquiry within 24 hours.</h6>
                               <div className="row">
                                 <div className="col-md-4">
                                   <label className="ContactLabel">Name</label>
                                    <input type="text" className="contactText"></input>
                                    
                                 </div>
                                 <div className="col-md-4">
                                   <label className="ContactLabel1">Email</label>
                                   <input type="text" className="contactText1"></input>
                                
                                 </div>
                               </div>

                               <div className="row">
                                 <div className="col-md-4">
                                   <label className="ContactLabel">Phone</label>
                                    <input type="text" className="contactText"></input>
                                    
                                 </div>
                                 <div className="col-md-4">
                                   <label className="ContactLabel1">Country</label>
                                   <select className="po contactText1">
                                   <option> Select Country</option>
                                     <option> India</option>
                                     <option> America</option>
                                     <option> Canada</option>
                                   </select>
                                 
                                
                                 </div>
                               </div>
                               <div className="row">
                                 <div className="col-md-4">
                                   <label className="ContactLabel3">Whatsapp Number</label>
                                    <input type="text" className="contactText"></input>
                                    
                                 </div>
                                 <div className="col-md-4">
                                   <label className="ContactLabel4">Project Budget</label>
                                   <select className="po1 contactText1">
                                   <option> Select Budget</option>
                                     <option> 1000000</option>
                                     <option> 2000000</option>
                                     <option> 3000000</option>
                                   </select>
                                  
                                
                                 </div>
                               </div>
                               <div className="row">
                               <div className="col-md-4">
                                   <label className="ContactLabel">Detail</label>
                                   
                                    <textarea className="contactText"></textarea>
                                    
                                 </div> 
                                 <div className="col-md-4">
                                   <label className="ContactLabel1">Upload</label>
                                    <input type="file" className="contactText1"></input>
                                    
                                 </div>
                                 
                               </div>
                                <div className="row">
                                
                                 
                                </div> 
                               <br></br>
                               <div className="row">
                                 <div className="col-md-4">
                                  <button className="btn btn-primary ContactLabel">Submit</button>
                                 </div>
                                 
                               </div>

                               
                          
                        </div>
                        

                    </div>
                    <div data-background="image" data-background-style="secondary" className="second" data-aos="flip-right" data-aos-duration="2500">
                        <img src="./Content/images/insights/1.jpg" alt="" className="data-background-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 */}
 <br></br><br></br>

 <h3 className="enquiry1">Submit Inquiry</h3>
<div className="container">
<div className="Row">
  <div className="col-md-12">
    <div className="col-md-3"></div>
    <div className="col-md-7"></div>
 <div class="contact-from">
                        <form name="form-feedback" id="form-feedback" data-request="onGetInTouch" data-request-success="clearFormAndResetCaptcha2(data)" data-request-error="errorMessage2(data)">
                          <div class="col-md-6">
                            <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" id="name2" name="name2" class="form-control" placeholder="Name" ></input>
  </div>
                          </div>
                          <div class="col-md-6 pull-right">
                               <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" id="email2" name="email2" class="form-control" placeholder="Email" ></input>
  </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
    <label for="exampleInputEmail1">Phone Number</label>
    <input type="text" id="phone2" name="phone2" class="form-control" placeholder="Phone Number" ></input>
  </div>
                          </div>
                          <div class="col-md-6 pull-right">
                          <div class="form-group">
    <label for="exampleInputEmail1">Inquiry For</label>
      <select id="inquiry2" name="inquiry2" class="form-control js-example-basic-single select2-hidden-accessible enquitybutton" tabindex="-1" aria-hidden="true">
    
    <option value="Web Design">UI/UX Design</option>
    <option value="Graphic Design">Graphic Design</option>
   

     <option value="Logo Design">Logo Design</option>
      <option value="Web">Web Development</option>
       <option value="App">App Development</option>
        <option value="Software">Software Development</option>

      <option value="Shared Web Hosting">Other</option>
      



  </select><span class="select2 select2-container select2-container--flat" dir="ltr"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-inquiry2-container"><span class="select2-selection__rendered" id="select2-inquiry2-container" title="Creative Design"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
  </div>
                          </div>
                          <div class="col-md-12">
                         <div class="form-group">
    <label for="exampleInputEmail1">Message</label>
    <textarea id="message2" name="message2"  class="form-control" rows="6" placeholder="Message"></textarea>
  </div>
                          </div>
                          <div class="col-md-12">
                          <div class="form-group">
                            
                          </div>
                          </div>
                         <button type="submit" class="btn btn-primary ">Submit</button>
                        </form>
                      </div>

                      <div className="col-md-2"></div>
                      </div>

                      </div>
                      </div>
 </React.Fragment >

        );
    }
}
