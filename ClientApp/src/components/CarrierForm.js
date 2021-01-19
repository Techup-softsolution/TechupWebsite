import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class CarrierForm extends Component {
    static displayName = CarrierForm.name;

    render() {
        return (
            <React.Fragment>
 <div className="content-section mrgn">
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div className="content-block-header" data-aos="fade-up" data-aos-duration="2000">
                    <p className="androiddeveloer">
                        Android Developer<br>
                        </br> 
                        Post: 2 | Experience: 3 to 5
                 
                        <span> </span>
                    </p>
                </div>
                <ul>
                <li type="circle" data-aos="fade-up" data-aos-duration="2000"><p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">  In-depth competency in programming knowledge of Mobile application <br></br>on Android Platform.</p></li>
                <li type="circle" data-aos="fade-up" data-aos-duration="2000"><p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">  Strong in developing Native and Hybrid Mobile applications.</p></li>
                <li type="circle" data-aos="fade-up" data-aos-duration="2000">  <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">  Strong knowledge of Android SDK including life-cycle, SQLite database and <br></br>different versions of Android, and to deal with different screen sizes.</p></li>
                <li type="circle" data-aos="fade-up" data-aos-duration="2000"> <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">  Familarity with RESTFul APIs to connect Android applications to backend services.</p></li>
                <li type="circle" data-aos="fade-up" data-aos-duration="2000"><p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">  Must have excellent design, problem solving, coding and debugging skills.</p></li>
                </ul>
            </div>
            <div className="col-lg-5">
                <p data-aos="fade-up" data-aos-duration="2000"></p>
                <p data-aos="fade-up" data-aos-duration="2000">
                
                  <div className="row">
                     
                  <div className="col-lg-4">
                {/* <label className="labelname" for="">First Name<span>*</span></label><br></br> */}<br></br>
                    <input className="inputclass" type ="text" placeholder="First Name "></input><br></br> 
                  
                    </div>
                    <div className="col-lg-4">
                {/* <label className="labelname1" for="">Last Name<span></span></label><br></br> */}<br></br> 
                    <input className="inputclass1" type ="text" placeholder="Last Name "></input><br></br> 
                  
                    </div>
                    </div>
                    <div className="row">
                  <div className="col-lg-4">
                {/* <label className="labelname" for="">Email<span>*</span></label><br></br> */}<br></br> 
                    <input className="inputclass" type ="text" placeholder="Email"></input><br></br> 
                  
                    </div>
                    <div className="col-lg-4">
                {/* <label className="labelname1" for="">Contact Number<span>*</span></label><br></br> */}<br></br> 
                    <input className="inputclass1" type ="text" placeholder="Contact Number"></input><br></br> 
                  
                    </div>
                    </div>

                    <div className="row">
                  <div className="col-lg-4">
                {/* <label className="labelname" for="">Education<span></span></label><br></br> */}<br></br> 
                {/* <input className="inputclass1" type ="text" placeholder="Education"></input><br></br>  */}
                <select className="inputclass1 dropdown" type ="text" placeholder="">
                <option>Select Education</option>
                     <option>Diploma</option>
                     <option>BE</option>
                     <option>ME</option>
                     <option>12th pass</option>

                   </select> 
                   {/* <select className="inputclass" type ="text">
                     <option>Diploma</option>
                     <option>BE</option>
                     <option>ME</option>
                     <option>12th pass</option>

                   </select> */}
                  
                    </div>
                    <div className="col-lg-4"><br></br> 
                {/* <label className="labelname1" for="">Experience<span></span></label><br></br> */}
                    <input className="inputclass1" type ="text" placeholder="Experience"></input><br></br> 
                  
                    </div>
                    </div>

                    <div className="row">
                  <div className="col-lg-4">
                {/* <label className="labelname" for="">Company Name<span></span></label><br></br> */}<br></br> 
                <input className="inputclass1" type ="text" placeholder="Company"></input><br></br> 
               
                  
                    </div>
                    
                    <div className="col-lg-4"><br></br> 
                {/* <label className="labelname1" for="">Experience<span></span></label><br></br> */}
                    <input className="inputclass1" type ="text" placeholder="City"></input><br></br> 
                  
                    </div>
                    </div>
                    <div className="row">
                  <div className="col-lg-4">
                {/* <label className="labelname" for="">Company Name<span></span></label><br></br> */}<br></br> 
                <input className="inputclass1" type ="text" placeholder="Job Title"></input><br></br> 
               
                  
                    </div>
                    
                    <div className="col-lg-4"><br></br> 
                {/* <label className="labelname1" for="">Experience<span></span></label><br></br> */}
                    <input className="inputclass1" type ="text" placeholder="Relevant Experience"></input><br></br> 
                  
                    </div>
                    </div>



                    <div className="row">
                    <div className="col-lg-4">
                <label className="labelname1" for="">Upload CV<span></span></label><br></br>
                    <input className="inputclass1" type ="file"></input><br></br> 
                  
                    </div>
                    </div>
                    <div className="row">
                  <div className="col-lg-4">
               
                <button className=" btn btn-primary inputclass1 buttonapply" type ="text">Apply Now</button> <br></br> 
                 
                  
                    </div>
                  
                    </div>

                    
                    
     
                </p>
            </div>
            
        </div>
    </div>
</div>


           </React.Fragment >
           

        );
    }
}
