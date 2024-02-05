import React, { useState } from "react";
import Card from "./Card"; 


const Cards = (props) =>{
    
    const [likedCourses, setLikedCourses] = useState([]); 
    const courses = props.courses;
    const category = props.category; 
    
    function getCourses(){
        if(category==='All')
        {
            const allCourses = []; 
            Object.values(courses).forEach( (courseCategory)=>{
                courseCategory.forEach( (course)=>{
                    console.log(course);
                    allCourses.push(course); 
                });
            }); 
            return allCourses;
        }
        else{
            return courses[category]; 
        }
    }
    


    // Adding all courses data in single array
    

    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {   

                // Adding Card with Each course from all courses
                getCourses().map(
                    (course)=>
                    {
                       return <Card key={course.id} 
                                    course={course}
                                    likedCourses={likedCourses}
                                    setLikedCourses={setLikedCourses}
                            ></Card>
                    }
                )
            }
        </div>
    );
}


export default Cards; 