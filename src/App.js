import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards"
import {apiUrl, filterData} from "./data"

import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(""); 

  useEffect(
    ()=>{
      const fetchData = async()=>
      {
        try {
          const res = await fetch(apiUrl); 
          const output = await res.json();
          console.log(output.data);
          setCourses(output.data); 
        } 
        catch (error) {
          toast.error("Error Occur"); 
        }
      } 
    
      fetchData(); 
    },
    [] );

  return (
        <div>
            <Navbar/>

            <Filter filterData={filterData}></Filter>

            <Cards courses={courses}></Cards>
      </div>
  );
};

export default App;
