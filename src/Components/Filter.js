import React from "react";

const Filter = (props) =>{
    let filterData = props.filterData;
    let category = props.category; 
    let setCategory = props.setCategory; 

    function filterHandler(title){
        setCategory(title);
    }

    return (
        <div className="w-11/12 max-w-max flex flex-wrap py-4 mx-auto justify-center gap-x-4 gap-y-4" >
            {
                filterData.map(
                    (data)=>{
                        return (    
                                <button onClick={()=>filterHandler(data.title)}
                                        key={data.id}
                                        className={ `text-white text-lg font-medium bg-black rounded-md px-2 border-2 transition-all duration-300 hover:bg-opacity-50
                                                        ${category===data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}
                                                 `}>

                                        {data.title}
                                </button>
                        )   
                    }
                )
            }
        </div>
    );
}


export default Filter; 