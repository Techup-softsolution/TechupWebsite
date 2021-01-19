import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './owl.css';  
import { Link } from 'react-router-dom';  

export class IOSCarrierForm extends Component {
    static displayName = IOSCarrierForm.name;

    render() {
        return (
            <React.Fragment>
 <div className="content-section mrgn">
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div className="content-block-header" data-aos="fade-up" data-aos-duration="2000">
                    <p className="androiddeveloer">
                    IOS Developer<br>
                        </br> 
                        Post 2 | Experience: 3 to 5
                 
                        <span> </span>
                    </p>
                </div>
                <ul>
               <li type="circle" data-aos="fade-up" data-aos-duration="2000"> <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000"> Good experience in Swift/Objective-C, API integration, Auto Layout.</p></li>
               <li type="circle" data-aos="fade-up" data-aos-duration="2000">  <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000"> Strong in developing Native and Hybrid mobile applications as per Apple standards.</p></li>
               <li type="circle" data-aos="fade-up" data-aos-duration="2000">  <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000"> Expertise in creating well-defined iphone user interface.</p></li>
               <li type="circle" data-aos="fade-up" data-aos-duration="2000">  <p className="content-block-excerpt" data-aos="fade-up" data-aos-duration="2000">  Hardworking, positive attitude and ability to deliver under time and resource constraints.</p></li>
                </ul>
            </div>
            <div className="col-lg-5">
                <p data-aos="fade-up" data-aos-duration="2000"></p>
                <p data-aos="fade-up" data-aos-duration="2000">
                  <div className="row">
                  <div className="col-lg-4">
                <label className="labelname" for="">First Name<span>*</span></label><br></br>
                    <input className="inputclass" type ="text"></input><br></br> 
                  
                    </div>
                    <div className="col-lg-4">
                <label className="labelname1" for="">Last Name<span></span></label><br></br>
                    <input className="inputclass1" type ="text"></input><br></br> 
                  
                    </div>
                    </div>
                    <div className="row">
                  <div className="col-lg-4">
                <label className="labelname" for="">Email<span>*</span></label><br></br>
                    <input className="inputclass" type ="text"></input><br></br> 
                  
                    </div>
                    <div className="col-lg-4">
                <label className="labelname1" for="">Contact Number<span>*</span></label><br></br>
                    <input className="inputclass1" type ="text"></input><br></br> 
                  
                    </div>
                    </div>

                    <div className="row">
                  <div className="col-lg-4">
                <label className="labelname" for="">Education<span></span></label><br></br>
                {/* <input className="inputclass1" type ="text"></input><br></br>  */}
                <select className="inputclass1 dropdown" type ="text">
                     <option>Diploma</option>
                     <option>BE</option>
                     <option>ME</option>
                     <option>12th pass</option>

                   </select>
                  
                    </div>
                    <div className="col-lg-4">
                <label className="labelname1" for="">Experience<span></span></label><br></br>
                    <input className="inputclass1" type ="text"></input><br></br> 
                  
                    </div>
                    </div>

                    <div className="row">
                  <div className="col-lg-4">
                <label className="labelname" for="">Company Name<span></span></label><br></br>
                <input className="inputclass1" type ="text"></input><br></br> 
                   {/* <select className="inputclass" type ="text">
                     <option>Diploma</option>
                     <option>BE</option>
                     <option>ME</option>
                     <option>12th pass</option>

                   </select> */}
                  
                    </div>
                    <div className="col-lg-4">
                <label className="labelname1" for="">Upload CV<span>*</span></label><br></br>
                    <input className="inputclass1" type ="file"></input><br></br> 
                  
                    </div>
                    </div>
                    <div className="row">
                  <div className="col-lg-4">
               
                <button className=" btn btn-primary inputclass1" type ="text">Submit</button> <br></br> 
                 
                  
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
