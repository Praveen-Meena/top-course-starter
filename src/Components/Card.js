import React from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) =>{
    const course = props.course; 
    const likedCourses = props.likedCourses; 
    const setLikedCourses = props.setLikedCourses; 

    function clickHandler(){

        // jab course pehle se hi liked hai
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) => prev.filter( (cid)=> (cid!==course.id)) ); 
            toast.warning("Liked Removed");
        }
        // jab liked nahi hai
        else{   
            // no course liked yet than this if-case execute
            if(likedCourses.length ===0){
                setLikedCourses([course.id]); 
            }
            // Already some other courses are liked and now we need to add one more
            else{
                setLikedCourses((prev) => [...prev, course.id]); 
            }
            toast.success("Liked Successfully"); 
        }
    } 

    return (
        <div className='w-[300px] bg-bgDark rounded-md overflow-hidden'>
                <div className="relative">
                    <img src={course.image.url} alt="Course Image"></img>

                    <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 flex justify-center items-center' >
                        <button onClick={clickHandler}>
                            {
                                (likedCourses.includes(course.id))
                                ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />

                            }
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                    <p className="text-white mt-2">
                        {
                            course.description.length>100 ? 
                            (course.description.substr(0, 100)) + "...": (course.description)
                        }
                    </p> 
                </div>
            
        </div>
    );
}


export default Card; 