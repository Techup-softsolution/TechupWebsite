import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, TabContent, TabPane, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';


export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            activeTab: new Array(4).fill('1')
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    //tab navigation
    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    }


    render() {
        return (
            <header className="site-header site-header-1">
                {/* Top bar start */}
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 top-bar-content" data-aos="fade-up" data-aos-duration="3000">
                                {/* Logo start */}
                                <Link to="/home"data-aos="fade-up" data-aos-duration="3000" title="Thompson Homepage" className="logo">
                                    <img src="./Content/images/TechupLogo.png" alt="Thompson" />
                                </Link>
                                {/* Logo end */}
                                {/* Contacts start */}
                                <div className="contacts">
                                    {/*<div className="contacts-item hidden-sm hidden-xs">
                                      <div className="title">
                                          <i className="fa fa-map-marker"></i>
                                          <span>Office address</span>
                                      </div>
                                      <div className="content">867 Pinewood Avenue
                      <br>Lanse, MI 49946</div>
                                      </div>*/}
                                    <div className="contacts-item hidden-md hidden-sm hidden-xs">
                                        <div className="title" data-aos="fade-up" data-aos-duration="1500">
                                           
                                            {/* <span>contacts</span> */}
                                        </div>
                                        <div className="content " data-aos="fade-up" data-aos-duration="3000"> &nbsp;
                                        <i class="fa fa-phone" aria-hidden="true">&nbsp; <a href="tel:+9099011665">(+91)9099011665</a></i>
                                            &nbsp;
                                            <a className="fa fa-envelope" href=""> &nbsp;business@techupsoftsolution.com</a> &nbsp;<br></br> 
                                           
                                            <a className="fa fa-skype" href="">&nbsp; Techup software</a>
                                        </div>
                                    </div>
                                    <div className="contacts-item follow-us ">
                                        <div className="content  ">
                                        <a data-aos="flip-right" className="border border-primary" data-aos-duration="3000" href="https://www.facebook.com/techupsoftsolutions">
                                        
                                                <i className="fa fa-facebook facebooks"></i>
                                            </a>
                                            {/* <a data-aos="flip-right" data-aos-duration="3000" href="https://www.facebook.com/simiNFOX">
                                                <i className="fa fa-facebook"></i>
                                            </a> */}
                                            <a data-aos="flip-right" className="border border-primary" data-aos-duration="3000" href="https://twitter.com/techupsoftso">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            {/* <a data-aos="flip-right" data-aos-duration="3000" href="https://twitter.com/SimiNFOX?lang=en">
                                                <i className="fa fa-twitter"></i>
                                            </a> */}
                                            <a data-aos="flip-right" className="border border-primary" data-aos-duration="3000" href="https://www.linkedin.com/company/techup-soft-solution">
                                                <i className="fa fa-linkedin linkd"></i>
                                            </a>
                                            {/* <a data-aos="flip-right" data-aos-duration="3000" href="https://in.linkedin.com/company/siminfox-technologies">
                                                <i className="fa fa-linkedin"></i>
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                                {/* Contacts end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Top bar end */}
                {/* Bottom bar start */}
                <div id="sticky-header" className="bottom-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bottom-bar-content">
                                    {/* Menu start */}
                                    <nav id="site-menu" className="site-menu hidden-sm hidden-xs hidden-md">
                                        <ul>
                                            {/* <li className="active">
                                                <Link to="/home">Home</Link>

                                            </li> */}
                                            <li>
                                                <Link to="/aboutUs">About US</Link>
                                            </li>
                                            {/* <li>
                                                <Link to="#">Products</Link>
                                                <ul>

                                                    <li>
                                                        <Link to="page-faq.html">Restaurant System</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="page-faq.html">Petrol Pump System</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="page-faq.html">Inventory System</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="page-faq.html">CRM</Link>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li data-rt-mega="services">
                                                <Link to="">Services</Link>
                                            </li>
                                            <li data-rt-mega="industries">
                                                <Link to="/page.html">Industries</Link>
                                            </li>
                                            {/* <li data-rt-mega="insights">
                                                <Link to="">Insights</Link>
                                            </li> */}
                                            <li>
                                                <Link to="/contact">Contact US</Link>
                                            </li>
                                            <li>
                                           <Link to="/carrier">Career</Link>
                                                            </li>
                                            {/* <li className="Elu">
                                                <Link to="/">elucidation</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="/page-faq.html">faq</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/portfolio-1-sidebar.html">case studies</Link>
                                                        <ul>
                                                            <li>
                                                                <Link to="/portfolio-1-sidebar.html">1 col + sidebar</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/portfolio-2.html">2 cols</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/portfolio-2-sidebar.html">2 cols + sidebar</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/portfolio-3.html">3 cols</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/portfolio-projects.html">single project</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog-alt.html">blog news</Link>
                                                        <ul>
                                                            <li>
                                                                <Link to="/blog-full-width.html">full width</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/blog-classNameic.html">classNameic</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/blog-alt.html">alternative</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/blog-article.html">single article</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> */}
                                        </ul>
                                    </nav>
                                    <Link id="mobile-menu-icon" to="/home" className="mobile-menu-icon hidden-lg">
                                        <i className="fa fa-bars"></i> Menu</Link>
                                    {/* Menu end */}
                                    {/* Mega menu start */}
                                    <div id="rt-mega" className="rt-mega rt-mega-desktop">
                                        <div data-rt-mega-content="services" className="rt-mega-item">
                                            <div className="rt-mega-item-inner">
                                                <div className="rowxd">
                                                   

                                                    <div className="col-md-3">
                                                        <h5 className="aa">
                                                        <Link to="/website" className="headerColor">Website Development</Link>
                            </h5>
                                                        <ul style={{ "marginTop": "40px" }}>
                                                       
                                                            <li>
                                                                <Link to="/website">Asp.Net Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">Angular Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">Node Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">React Development</Link>
                                                            </li>

                                                            <li>
                                                                <Link to="/website">Magento Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">Wordpress Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">PHP Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">Codeigniter Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">Laravel Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">Joomla Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">Share point Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">MEAN Stack Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/website">Shopify Development</Link>
                                                            </li>
                                                           
                                                           
                                                          
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5 className="aa">
                                                            Mobile App Development
                            </h5>
                                                        <ul style={{ "marginTop": "40px" }}>
                                                        <li>
                                                                <Link to="/androidApps">Android Apps Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/iOSApps">iOS Apps Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">React-Native App Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">Flutter App Development</Link>
                                                            </li>

                                                            <li>
                                                                <Link to="#">Xamarin App Development</Link>
                                                            </li>
                                                            <br></br>
                                                           
                                                            <h5 className="aa">
                                                            <Link to="/software" className="headerColor">Software Development</Link> 
                            </h5>
                                                        <ul style={{ "marginTop": "40px" }}>
                                                       
                                                            <li>
                                                                <Link to="/software">CMS Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/software">Portal Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/software">Software product development  </Link>
                                                            </li>
                                                         
                                                           
                                                        </ul>
                                                           
                                                          
                                                            
                                                        </ul >
                                                    </div >

                                                    <div className="col-md-3">
                                                    <h5 className="aa">
                                                        Digital Marketing
                            </h5>
                                                        <ul style={{ "marginTop": "40px" }}>
                                                       
                                                            <li>
                                                                <Link to="/searchEngineOptimization">Search Engine Optimization(SEO)</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/socialMediaMarketing">Social Media Marketing(SMM)</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/googleAdWords">Google AdWords (PPC)</Link>
                                                            </li>
                                                          
                                                           
                                                          
                                               
                                                        </ul>
                                                    </div>

                                                    <div className="col-md-3">
                                                       
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5 className="aa">
                                                           
                            </h5>
                                                        <ul style={{ "marginTop": "40px" }}>
                                                       
                                                        <li>
                                                        <Link to="/UIUXDesign" className="headerColor">UI/UX Design</Link>
                                                              
                                                            </li>
                                                            <li>
                                                            <Link to="/maintananceAndSuport" className="headerColor">Maintanance & Suport</Link>
                                                           
                                                            </li>
                                                            <li>
                                                            <Link to="/softwareArchitecture" className="headerColor">Software Architecture</Link>
                                                           
                                                            </li>
                                                            
                                                           
                                                          
                                                        </ul>
                                                    </div>
                                                   
                                                   
                                                   
                                                    {/* <div className="col-md-2">
                                                        <h5 className="mt0">
                                                            DESIGN SOLUTIONS
                            </h5>
                                                        <ul style={{ "marginTop": "40px" }}>
                                                            <li>
                                                                <Link to="/CorporateIdentityDesign">Corporate Identity Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/logoDesignbyusingGoldenRatio">Logo Design by using Golden Ratio</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/mailerAndNewsletterDesign">Mailer & Newsletter Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/socialMediaPostsDesign">Social Media Posts Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/PackagingDesignAndRemodeling">Packaging Design & Remodeling</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/indoorAndOutdoorBranding">Indoor & Outdoor Branding</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/catelogueAndBrochures">Catelogue & Brochures</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/marketingPresentations">Marketing Presentations</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/articleAndBlogWriting">Article & Blog Writing</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/websiteContentWriting">Website Content Writing</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/sEOContentWriting">SEO Content Writing</Link>
                                                            </li>
                                                        </ul >
                                                    </div > */}
                                                    <div className="col-md-2 x"></div>
                                                    <div className="col-md-2 x"></div>
                                                    <div className="col-md-2 x"></div>
                                                    {/* <div className="col-md-4">
                                                        <h5 className="mt0">
                                                            PROJECT TRAINING & INTERNSHIP (FOR STUDENTS)
                            </h5>
                                                        <ul style={{ "marginTop": "40px" }}>
                                                            <li>
                                                                <Link to="/mVCProgramming">ASP.NET MVC Programming</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/eDiscoveryConsulting">e-Discovery Consulting</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/angularJSProgramming">Angular JS Programming</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/androidAppsDevelopment">Android Apps Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/iOSAppsDevelopment">iOS Apps Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/graphicDesignTraining">Graphic Design Training</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                              */}
                                             
                                             
                                                </div>
                                            </div>
                                        </div>
                                        <div data-rt-mega-content="industries" className="rt-mega-item">
                                            <div className="rt-mega-item-inner">
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab"src="./Content/images/icons/healthcare.jpg" alt="" />
                                                                </p>
                                                                <p className="za1">Healthcare</p>
                                                            </a>
                                                        </div>education
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/education.png" alt="" />
                                                                </p>
                                                                <p className="za">Education</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                     <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/trolly.png" alt="" />
                                                                </p>
                                                                <p className="za">eCommerce</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/retail.png" alt="" />
                                                                </p>
                                                                <p className="zaa">Retail</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/manufacturing.png" alt="" />
                                                                </p>
                                                                <p className="za">Manufacturing</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/logistic.png" alt="" />
                                                                </p>
                                                                <p className="zb">Logistics</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/realestate.png" alt="" />
                                                                </p>
                                                                <p className="zb">RealEstate</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    
                                                   
                                                   
                                                </div>
                                                <div className="row">
                                                <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/immigration.png" alt="" />
                                                                </p>
                                                                <p className="zd">Immigration</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/sport.png" alt="" />
                                                                </p>
                                                                <p className="zc">Sport</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    
                                                   
                                                   
                                                    
                                                  
                                                   
                                                    <div className="col-md-1">
                                                        <div className="text-center">
                                                            <a href="#">
                                                                <p className="mt0">
                                                                    <img className="ab" src="./Content/images/icons/media.png" alt="" />
                                                                </p>
                                                                <p className="zc">Media</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                   
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div data-rt-mega-content="insights" className="rt-mega-item">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div data-rt-tabs data-rt-tabs-type="vertical" data-rt-tabs-active="2" className="rt-tabs mt0"> */}

                                                        {/* <Nav tabs style={{ "width": "25%" }} className="titles">
                                                            <NavItem>
                                                                <NavLink
                                                                    active={this.state.activeTab[0] === '1'}
                                                                    onClick={() => { this.toggle(0, '1'); }}>
                                                                    <i className="fa fa-car"></i> Automotive
                                                                    {this.state.activeTab[0] === '1' ?
                                                                        <div className="nav-tabsactive"></div>
                                                                        : null}
                                                                </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    active={this.state.activeTab[0] === '2'}
                                                                    onClick={() => { this.toggle(0, '2'); }}>
                                                                    <i className="fa fa-flask"></i> Chemicals
                                                                    {this.state.activeTab[0] === '2' ?
                                                                        <div className="nav-tabsactive"></div>
                                                                        : null}
          </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    active={this.state.activeTab[0] === '3'}
                                                                    onClick={() => { this.toggle(0, '3'); }}>
                                                                    <i className="fa fa-flash"></i> Energy & Utilities
                                                                    {this.state.activeTab[0] === '3' ?
                                                                        <div className="nav-tabsactive"></div>
                                                                        : null}
          </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    active={this.state.activeTab[0] === '4'}
                                                                    onClick={() => { this.toggle(0, '4'); }}>
                                                                    <i className="fa fa-heart"></i> Healthcare
                                                                    {this.state.activeTab[0] === '4' ?
                                                                        <div className="nav-tabsactive"></div>
                                                                        : null}
          </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    active={this.state.activeTab[0] === '5'}
                                                                    onClick={() => { this.toggle(0, '5'); }}>
                                                                    <i className="fa fa-wrench"></i> Manufacturing
                                                                    {this.state.activeTab[0] === '5' ?
                                                                        <div className="nav-tabsactive"></div>
                                                                        : null}
          </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    active={this.state.activeTab[0] === '6'}
                                                                    onClick={() => { this.toggle(0, '6'); }}>
                                                                    <i className="fa fa-wifi"></i> Telecommunications
                                                                    {this.state.activeTab[0] === '6' ?
                                                                        <div className="nav-tabsactive"></div>
                                                                        : null}
          </NavLink>
                                                            </NavItem>
                                                        </Nav> */}
                                                        {/* <TabContent style={{ "width": "75%" }} activeTab={this.state.activeTab[0]}>
                                                            <TabPane tabId="1" className="content-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">The Truth About Automotive Is About To Be Revealed</a>
                                                                            </h4>
                                                                            <p>Etiam varius cursus vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...</p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">10 Great Tips To Earn More In The Automotive Industry</a>
                                                                            </h4>
                                                                            <p>Suspendisse a tellus nisl. Etiam enim nibh, maximus nec justo nec, sagittis facilisis leo. Proin quis tincidunt diam. Integer sit amet ullamcorper orci. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">Five Moments That Basically Sum Up Your Automotive Experience</a>
                                                                            </h4>
                                                                            <p>Nulla sed vulputate dolor, non ultrices nunc. Sed nunc metus, eleifend eu suscipit ut, viverra ut tellus. Integer ut felis non nulla volutpat posuere. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </TabPane>
                                                            <TabPane tabId="2">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">15 Reasons Why You Shouldn't Rely On Chemicals Anymore</a>
                                                                            </h4>
                                                                            <p>Integer sodales nunc in tortor hendrerit suscipit. Pellentesque semper leo non ipsum pharetra, ut fringilla sapien tincidunt.</p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">7 Chemicals Tips You Need To Learn Now</a>
                                                                            </h4>
                                                                            <p>Nunc ut diam vestibulum, ullamcorper eros in, placerat ex. Aliquam eu libero lacinia, ultricies sem pulvinar, laoreet enim. Aliquam eget feugiat enim, eu aliquam lorem. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <br>
                                                                            
                                                                            </br>
                                                                            <h4 className="title">
                                                                                <a href="#">What Causes The Emerging Trend Of Chemicals Industry In Asia?</a>
                                                                            </h4>
                                                                            <p>Maecenas porttitor est justo, id vulputate orci ullamcorper ac. Cras venenatis eleifend magna. Etiam iaculis nisl justo, nec maximus tellus accumsan in. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </TabPane>
                                                            <TabPane tabId="3">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">10 Secrets About Energy & Utilities That Nobody Will Tell You</a>
                                                                            </h4>
                                                                            <p>Ut pretium odio ut turpis fermentum congue. Etiam molestie ultrices turpis sed lacinia. Aliquam fermentum porta sem, a gravida est facilisis non. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">Seven Reasons Why People Like Energy & Utilities</a>
                                                                            </h4>
                                                                            <p>Mauris sit amet dictum quam. Phasellus fermentum pretium ante non congue. Nulla facilisi. Nam blandit eleifend tortor ut dictum. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">15 Small But Important Things To Observe In Energy & Utilities</a>
                                                                            </h4>
                                                                            <p>Vivamus pretium, odio et tincidunt sagittis, tellus elit tempus mi, at dapibus tellus tellus nec libero. Curabitur consectetur id enim sit amet varius. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </TabPane>
                                                            <TabPane tabId="4">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">All You Need To Know About Healthcare</a>
                                                                            </h4>
                                                                            <p>Aliquam erat volutpat. Vivamus malesuada, eros eget posuere cursus, ipsum nibh mollis sapien, eget porttitor ante nunc sit amet metus. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">This Year Will Be The Year of Healthcare</a>
                                                                            </h4>
                                                                            <p>Nulla finibus diam sit amet velit vehicula auctor. Sed rutrum et libero vitae sollicitudin. Pellentesque non auctor enim.</p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">?10 Great Healthcare Ideas That You Can Share With Your Friends</a>
                                                                            </h4>
                                                                            <p>Praesent id arcu nec massa condimentum efficitur. Mauris non velit sed tortor sodales rhoncus sed a lacus. In quis erat fringilla, lacinia justo ac, dictum dolor. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </TabPane>
                                                            <TabPane tabId="5">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">Five Ways Manufacturing Can Improve Your Business</a>
                                                                            </h4>
                                                                            <p>Maecenas blandit nunc ut arcu venenatis, quis lacinia sapien feugiat. Donec fringilla ipsum vitae faucibus elementum. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">Understanding The Background Of Manufacturing Industry</a>
                                                                            </h4>
                                                                            <p>Maecenas facilisis magna nisi, fringilla sollicitudin erat pulvinar a. Aenean efficitur mauris ut ex blandit, non dictum lorem vulputate. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">Seven Facts You Never Knew About Manufacturing</a>
                                                                            </h4>
                                                                            <p>Vivamus venenatis interdum tellus, vel consequat nunc molestie id. Nunc consectetur massa in erat fermentum, eu placerat libero viverra. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </TabPane>
                                                            <TabPane tabId="6">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">15 Telecom Trends You Should Know Before Even Starting Your Business</a>
                                                                            </h4>
                                                                            <p>Proin tempus justo et enim lacinia lobortis. Aliquam urna mi, dictum nec lorem a, fringilla tempor nibh. Phasellus nec auctor magna. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">Now Is The Time For You To Know The Truth About Telecom</a>
                                                                            </h4>
                                                                            <p>Morbi ac pretium justo, vel vestibulum ante. Cras rhoncus vestibulum sem auctor feugiat. Praesent varius ante sem, vel dictum mauris blandit a. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <br></br>
                                                                            <h4 className="title">
                                                                                <a href="#">Five Useful Tips From Experts In Telecom</a>
                                                                            </h4>
                                                                            <p>Nullam tristique est diam, ac efficitur urna interdum nec. Nulla pulvinar non justo et cursus. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </TabPane>
                                                        </TabContent> */}
                                                        {/* 
                                                             <div data-rt-tabs-width="20%">
                                                             <ul>
                                                                <li data-key="automotive">
                                                                    <i className="fa fa-car"></i> Automotive</li>
                                                                <li data-key="chemicals">
                                                                    <i className="fa fa-flask"></i> Chemicals</li>
                                                                <li data-key="energy">
                                                                    <i className="fa fa-flash"></i> Energy & Utilities</li>
                                                                <li data-key="health">
                                                                    <i className="fa fa-heart"></i> Healthcare</li>
                                                                <li data-key="manufacturing">
                                                                    <i className="fa fa-wrench"></i> Manufacturing</li>
                                                                <li data-key="telecom">
                                                                    <i className="fa fa-wifi"></i> Telecommunications</li>
                                                            </ul> 
                                                        </div>
                                                        <div data-rt-tabs-width="80%" className="content">
                                                            <div data-value="automotive" className="content-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">The Truth About Automotive Is About To Be Revealed</a>
                                                                            </h4>
                                                                            <p>Etiam varius cursus vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...</p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">10 Great Tips To Earn More In The Automotive Industry</a>
                                                                            </h4>
                                                                            <p>Suspendisse a tellus nisl. Etiam enim nibh, maximus nec justo nec, sagittis facilisis leo. Proin quis tincidunt diam. Integer sit amet ullamcorper orci. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">Five Moments That Basically Sum Up Your Automotive Experience</a>
                                                                            </h4>
                                                                            <p>Nulla sed vulputate dolor, non ultrices nunc. Sed nunc metus, eleifend eu suscipit ut, viverra ut tellus. Integer ut felis non nulla volutpat posuere. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-value="chemicals" className="content-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">15 Reasons Why You Shouldn't Rely On Chemicals Anymore</a>
                                                                            </h4>
                                                                            <p>Integer sodales nunc in tortor hendrerit suscipit. Pellentesque semper leo non ipsum pharetra, ut fringilla sapien tincidunt.</p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">7 Chemicals Tips You Need To Learn Now</a>
                                                                            </h4>
                                                                            <p>Nunc ut diam vestibulum, ullamcorper eros in, placerat ex. Aliquam eu libero lacinia, ultricies sem pulvinar, laoreet enim. Aliquam eget feugiat enim, eu aliquam lorem. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">What Causes The Emerging Trend Of Chemicals Industry In Asia?</a>
                                                                            </h4>
                                                                            <p>Maecenas porttitor est justo, id vulputate orci ullamcorper ac. Cras venenatis eleifend magna. Etiam iaculis nisl justo, nec maximus tellus accumsan in. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-value="energy" className="content-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">10 Secrets About Energy & Utilities That Nobody Will Tell You</a>
                                                                            </h4>
                                                                            <p>Ut pretium odio ut turpis fermentum congue. Etiam molestie ultrices turpis sed lacinia. Aliquam fermentum porta sem, a gravida est facilisis non. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">Seven Reasons Why People Like Energy & Utilities</a>
                                                                            </h4>
                                                                            <p>Mauris sit amet dictum quam. Phasellus fermentum pretium ante non congue. Nulla facilisi. Nam blandit eleifend tortor ut dictum. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">15 Small But Important Things To Observe In Energy & Utilities</a>
                                                                            </h4>
                                                                            <p>Vivamus pretium, odio et tincidunt sagittis, tellus elit tempus mi, at dapibus tellus tellus nec libero. Curabitur consectetur id enim sit amet varius. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-value="health" className="content-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">All You Need To Know About Healthcare</a>
                                                                            </h4>
                                                                            <p>Aliquam erat volutpat. Vivamus malesuada, eros eget posuere cursus, ipsum nibh mollis sapien, eget porttitor ante nunc sit amet metus. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">This Year Will Be The Year of Healthcare</a>
                                                                            </h4>
                                                                            <p>Nulla finibus diam sit amet velit vehicula auctor. Sed rutrum et libero vitae sollicitudin. Pellentesque non auctor enim.</p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">?10 Great Healthcare Ideas That You Can Share With Your Friends</a>
                                                                            </h4>
                                                                            <p>Praesent id arcu nec massa condimentum efficitur. Mauris non velit sed tortor sodales rhoncus sed a lacus. In quis erat fringilla, lacinia justo ac, dictum dolor. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Roger S. Santos</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-value="manufacturing" className="content-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">Five Ways Manufacturing Can Improve Your Business</a>
                                                                            </h4>
                                                                            <p>Maecenas blandit nunc ut arcu venenatis, quis lacinia sapien feugiat. Donec fringilla ipsum vitae faucibus elementum. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>video</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">Understanding The Background Of Manufacturing Industry</a>
                                                                            </h4>
                                                                            <p>Maecenas facilisis magna nisi, fringilla sollicitudin erat pulvinar a. Aenean efficitur mauris ut ex blandit, non dictum lorem vulputate. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">Seven Facts You Never Knew About Manufacturing</a>
                                                                            </h4>
                                                                            <p>Vivamus venenatis interdum tellus, vel consequat nunc molestie id. Nunc consectetur massa in erat fermentum, eu placerat libero viverra. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Marguerite C. Hill</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-value="telecom" className="content-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">15 Telecom Trends You Should Know Before Even Starting Your Business</a>
                                                                            </h4>
                                                                            <p>Proin tempus justo et enim lacinia lobortis. Aliquam urna mi, dictum nec lorem a, fringilla tempor nibh. Phasellus nec auctor magna. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>brief</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">Now Is The Time For You To Know The Truth About Telecom</a>
                                                                            </h4>
                                                                            <p>Morbi ac pretium justo, vel vestibulum ante. Cras rhoncus vestibulum sem auctor feugiat. Praesent varius ante sem, vel dictum mauris blandit a. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 project preview">
                                                                        <div className="project-details">
                                                                            <div className="project-type">
                                                                                <span>report</span>
                                                                            </div>
                                                                            <h4 className="title">
                                                                                <a href="#">Five Useful Tips From Experts In Telecom</a>
                                                                            </h4>
                                                                            <p>Nullam tristique est diam, ac efficitur urna interdum nec. Nulla pulvinar non justo et cursus. </p>
                                                                        </div>
                                                                        <div className="project-meta">
                                                                            <ul className="post-meta">
                                                                                <li className="meta-date">May 16 '18</li>
                                                                                <li className="meta-author">
                                                                                    <a href="#">Ramona T. Gerena</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                      
                                                      </div> */}












                                                      
                                                    {/* </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div >
                                    {/* Mega menu end */}
                                    {/* Search start */}
                                    {/*  <div className="search-wrapper">
                                  <form id="header-search1">
                                      <input placeholder="type to search..." type="search">
                                          <button id="show-search" type="submit" className="btn-search">
                                              <i className="fa fa-search"></i>
                                          </button>
                    </form>
                  </div> */}
                                    {/* Search end */}
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
                {/* Bottom bar end */}
            </header >
        );
    }
}
