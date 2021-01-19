import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';
import { Link } from 'react-router-dom';  

export class AboutUs extends Component {
    static displayName = AboutUs.name;

    render() {
        return (
            <React.Fragment>

<div className="content-section titlebar">
    <div className="container">
        <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="3000">
                <div id="titlebar" className="titlebar-content">
                    <img src="./Content/images/insights/about.jpg" alt="" className="titlebar-bg" />
                      <ol className="breadcrumb">
                     <li>
                     <Link to="/home">Home</Link>
                        </li>

                        <li className="active">About Us</li>
                    </ol>  
                    <div className="titlebar-content-wrapper">
                        <h1 className="titlebar-title">About Us</h1>
                        <p className="titlebar-description" data-aos="fade-up" data-aos-duration="3000">We help you converting your idea into a reality through our expertise of making <b>BRAND NAME</b>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="content-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content-section-header">
                    <div className="content-section-header-wrapper" data-aos="flip-up" data-aos-duration="2000">
                        <h2 className="title">what makes us different</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4" data-aos="flip-right" data-aos-duration="2000">
                <p className="content-block-excerpt-2 aboutline ">Mission</p>
                <p className="content-block-excerpt">
                   <b> Our mission is to improving the business expansion of our clientele with creative Design and Development to bring market-defining high-quality solutions that makes importance and consistent competitive benefit for our clients around the world.</b>
 
                </p>
                <p>Our mission is to bring most advantageous solutions with excellence and services at sensible prices. For us client happiness is rest of all. We are very gracious in our communication to the clientele and it helps us preserve existing clients and develop customer list.</p>

            </div>
            <div className="col-md-4" data-aos="flip-right" data-aos-duration="2000">
                <p className="content-block-excerpt-2 aboutline">Vision</p>
                <p className="content-block-excerpt">
                <b> Our vision is to build up in an invariable way and grow as a foremost IT & Interactive Marketing Service provider to turn into a leading player, in providing excellent IT Solutions and Marketing Services in the competitive international marketplace. </b>
                </p>
                <p>
                    Our skilled, stretchy and integrated method reproduces in what we do. We at all times demonstrate our customers to triumph. We have the capability to accelerate and rapidly share the immense work or products of your organization or business. 
                </p>

            </div>
            <div className="col-md-4" data-aos="flip-right" data-aos-duration="2000">
                <p className="content-block-excerpt-2 aboutline">YES! THE RIGHT ONE</p>
                <p className="content-block-excerpt"><b>TECHUP offers an incredible service in the design, improvement, programming and promotion of your site. We endeavor to offer the best solution for your business at a fair cost. We are always exploring new advancements and suggest them when they make sense.</b> </p>
                <p>We adore what we do, some may state a lot but we rather choose to convey energy and responsibility to each venture we take a shot at!</p>

            </div>
        </div>
    </div>
</div>



{/* <div className="content-section pt0 pb0">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="benefits">
                    <div className="benefits-item" data-aos="flip-right" data-aos-duration="2000">
                        <div className="content pTagAlign">
                            <span className="benefits-item-icon icon-iconmonstr-idea-13"></span>
                            <h4>DIVERGENT THINKING</h4>
                            <p>
                                We hear,we talk about, we exhort. Sounds evident, however; we tune in to your thoughts, ideas and goals for your business needs. We then select the best answer to fit your requirement. We don't shoehorn ventures and incase we feel we're not a solid match; we'll be straightforward and let you know from the start.
                            </p>

                        </div>
                    </div>
                    <div className="benefits-item" data-aos="flip-right" data-aos-duration="2000">
                        <div className="content pTagAlign">
                            <span className="benefits-item-icon icon-iconmonstr-idea-12"></span>
                            <h4>IMAGINATION</h4>
                            <p>
                                We cherish talking about and arranging new undertakings and have years of information and experience that we convey to the table. Whether it’s a website or a graphic design, system development or custom programming, we like to keep everything under one roof to make it easier for our customers.
                            </p>

                        </div>
                    </div>
                    <div className="benefits-item" data-aos="flip-right" data-aos-duration="2000">
                        <div className="content pTagAlign">
                            <span className="benefits-item-icon icon-iconmonstr-target-6"></span>
                            <h4>360° INTELLECTION</h4>
                            <p>
                                We research, design & develop the project but it is incomplete without refining it. It is the 3rd step before launching the project and it is also an important part of process of TECHUP. We remove unwanted elements from your project making it light and easy-to-access for your potential clients.
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
            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
                <div className="cta-3">
                    <div className="first">
                        <div className="content pTagAlign" data-aos="fade-up" data-aos-duration="2500">
                            <h3>Energetic Workforce</h3>
                            <p>
                                We believe “Great service starts with great people.” Our teams are the most stable part in TECHUP's delivery capability. By forming a helpful and inspiring working atmosphere, we inspire our teams not only to imagine the solution, but also to discover solutions to clients' business issues. Our teams always have the opportunity to face themselves and develop and enlarge their perspectives through worldwide coursework.
                            </p>
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


<div className="content-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div className="content-block-header" data-aos="fade-up" data-aos-duration="2000">
                    <p>
                        We craft  
                 
                        <span> &nbsp;Attractive & Fascinating Brands</span>
                    </p>
                </div>
                <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">Our teams apply experience, foresight, and industry expertise to pinpoint emerging opportunities to help build, manage, and protect your business' value.</p>
            </div>
            <div className="col-lg-5">
                <p data-aos="fade-up" data-aos-duration="2000">Our teams apply experience, foresight, and industry expertise to pinpoint emerging opportunities to help build, manage, and protect your business' value.</p>
                <p data-aos="fade-up" data-aos-duration="2000">
                    Our axiom of triumph is our client’s success. Our mantra is to always believe in the latest technology along with it introducing the International Market with the most inventive services, tools, systems and applications.
               Our strength, principles and reasonableness ensures prescribed procedures that control inquiries about market in India and abroad. Our areas of expertise are; IT SOLUTIONS, MARKETING & PROMOTIONS, DESIGN.

                </p>
            </div>
        </div>
    </div>
</div>

<div className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
                                <div className="stats">
                                    <div className="stats-item">
                                       
                                        <div className="stats-item-content">
                                            
                                        </div>
                                    </div>
                                    <div className="stats-item">
                                    <h3 className="teamAbout">Join our team</h3><br></br>
                                    <button className="btn btn-primary azz"> <Link className="vg" to="/carrier">Explore the opportunities</Link></button>
                                        <div className="stats-item-content">
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="stats-item">
                                       
                                        <div className="stats-item-content">
                                          
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

