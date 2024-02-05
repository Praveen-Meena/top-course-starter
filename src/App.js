import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards"
import Spinner from"./Components/Spinner"
import {apiUrl, filterData} from "./data"

import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(null); 
  const [londing, setLoading] = useState(true); 

  const [category, setCategory] = useState(filterData[0].title); 

  async function fetchData()
  {
    setLoading(true); 
    try {
      const res = await fetch(apiUrl); 
      const output = await res.json();
      console.log(output.data);
      setCourses(output.data); 
    } 
    catch (error) {
      toast.error("Error Occur"); 
    }
    setLoading(false); 
  } 

  useEffect( 
    () => {
      fetchData()
    },
    []
  );

  return (
        <div className="min-h-screen flex flex-col bg-bgDark2">
            <div>
                <Navbar/>
            </div>

            <div>
                <Filter filterData={filterData}
                        category={category}
                        setCategory={setCategory}
              ></Filter>
            </div>
      
            <div className="w-11/12 max-w-[1200px] flex flex-wrap m-auto min-h-[50vh] justify-center items-center">
              {
                londing ? (<Spinner/>):(<Cards  courses={courses} 
                                                category={category} 
                                        />)
              }
            </div>
      </div>
  );
};

export default App;
