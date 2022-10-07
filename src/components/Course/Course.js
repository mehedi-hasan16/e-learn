import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/data.JSON'
import Cart from '../Cart/Cart';
import CourseList from '../CourseLIst/CourseList';
import './Course.css'

const Course = () => {
    const [course, setCourse] = useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch(fakeData)
        .then(res=>res.json())
        .then(data=>setCourse(data))
        .catch(error=>console.log(error))
    },[])

    const addClick =(element)=>{
        const newCart= [...cart,element]
        setCart(newCart);
    }

    return (
        <div className='course-home'>
            
            <div className="course-container">
            <h1>this is course</h1>
            {
                course.map(element=><CourseList addClick={addClick} element={element}></CourseList>)
            }
            </div>
            <div className="course-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Course;