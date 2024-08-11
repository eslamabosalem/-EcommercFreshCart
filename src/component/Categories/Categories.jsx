import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function Categories() {


  const [categories , setCategories] = useState([])



  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true
  
  };










  function getCategory(){
  
  axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  
  .then(({data})=>{
  
    setCategories(data.data)
    console.log(data.data);
  })
  .catch((api)=>{
  
  console.log(api);
  
  })
}
useEffect(()=>{
  getCategory();
},[])
  







  return (
   <>
<div className=" py-5 ">
  <h2 className='py-4 text-gray-800 text-xl font-medium'> shop Popular Cartegories</h2>
<Slider {...settings}>
{categories.map((category)=> <div  key={category._id} className=""  >
  <img className='catogory-img w-full' src={category.image} alt={category.name} />
  <h3 className='font-light mt-2'>  {category.name} </h3>
</div> )}
    </Slider>
   
</div>
   </>
  )
}
