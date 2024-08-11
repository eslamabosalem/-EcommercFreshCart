import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import {RingLoader} from "react-spinners"
import useProducts from '../../Hooks/useProducts'

export default function Products() {

let{data, error,isError,isLoading,isFetched}=useProducts();

  // function getRecent(){

  //   return axios.get("https://ecommerce.routemisr.com/api/v1/products")
  // }
  
  // let {data, error,isError,isLoading,isFetched}=useQuery({
  //   queryKey:["recentproducts"],
  //   queryFn:getRecent,
  //   staleTime:80000,
  //   // retry:6,
  //   // retryDelay:1000,
  //   // refetchInterval:3000,
  //   // refetchIntervalInBackground:true
  
  // });

  if (isLoading){


    return (
    <>
    <div className=" py-8 text-center w-full flex justify-center"><RingLoader color='green'></RingLoader></div>
    
    
    
    </>
    )
    }
    
    if (isError){
    
    
    return (
    <>
    <div className=" py-8 text-center w-full flex justify-center"><RingLoader color='green'></RingLoader></div>
    <h3>{error}</h3>
    
    </>
    )
    }
    
    
    
    
    
    
    
      return (
      <>
     
      <div className="row ">
        {data?.data?.data.map((product)=>   <div key={product.id} className="md:w-6/12 px-3 lg:w-3/12 xl:w-2/12 ">
    
    
          <div className="product">
            <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>
          <img className='w-full' src={product.imageCover} alt={product.title}  />
          <span className='block font-light text-green-600'>{product.category.name}</span>
    <h3 className="text-lg font-normal text-gray-800 mb-4">{product.title.split(" ").slice(0,2).join(" ")}</h3>
        
    <div className="flex justify-between  ">
    <span>
        {product.price} EGP
    </span>
    
    <span> {product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
    
    </div>
    
    <button className='btn  '>add to cart</button>
    </Link>
       </div>
        </div>
    )}
     
    
      </div>
      
      
      
      
      </>
      )










  
}
