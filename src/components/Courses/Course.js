import React from 'react';
import './Course.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Course = (props) => {
    console.log(props.courses);
    const courses = props.courses;
    console.log(courses);
    const [cart,setCart] = useState([]);
    
    const handleAddCourse = (courses)=>{
        //console.log('Added',countryInfo);
        const newCart = [...cart, courses];
        setCart(newCart);
      }
    return (
        <div className="main-container container">
            <div className="courseDetail-container">
                {courses.map(courseInfo => 
                    <div className="course">
                        <div className="course-img">
                            <img src={courseInfo.img} alt="" srcset=""/>
                        </div>
                        <div className="course-details">
                            <h4>{courseInfo.course}</h4>
                            <p>Instructor : {courseInfo.name}</p>
                            <p><small>{courseInfo.university}</small></p>
                            <h5 className="price"><strong>$ {courseInfo.fee}</strong></h5>
                            <p className="text-highlight"><small>BestSeller</small></p>
                            <p className="text-gold">Rating : {courseInfo.rating} || {courseInfo.lecture} Lectures || {courseInfo.time} || ( {courseInfo.student} )</p>
                            <button 
                                className="main-button btn btn-success" 
                                onClick={()=>handleAddCourse(courseInfo)}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;Enroll Now
                            </button>
                        </div>
                    </div>)}
            </div>
            <div className="course cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Course;