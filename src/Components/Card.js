import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({course}) =>{
    return (
        <div>
            <div>
                <div>
                    <img src={course.image.url} alt="Course Image"></img>
                </div>
                <div>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
                <div>
                    <p>{course.title}</p>
                    <p>{course.desc}</p>
                </div>
            </div>
        </div>
    );
}


export default Card; 