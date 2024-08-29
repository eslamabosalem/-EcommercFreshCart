import React, { useEffect, useState } from 'react'
import useProducts from '../../Hooks/useProducts'
import axios from 'axios';
import {RingLoader} from "react-spinners"
import { useQuery } from '@tanstack/react-query'

export default function Brands() {
const [brandsProduct, setBrandsProduct] = useState([])

function getBrandes(){
 return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
.then((response)=>{
console.log(response?.data?.data);
setBrandsProduct(response?.data?.data)

})
.catch((erro)=>{
  console.log(erro);
  setBrandsProduct(erro.response.data.data)
})
}
useEffect(()=>{
  getBrandes()
},[])
let {data, error,isError,isLoading,isFetched}=useProducts();
if (isLoading){
  return (
  <>
  <div className=" py-8 text-center w-full flex justify-center"><RingLoader color='green'></RingLoader></div>
  </>) } 
  if (isError){
  
  
  return (
  <>
  <div className=" py-8 text-center w-full flex justify-center"><RingLoader color='green'></RingLoader></div>
  <h3>{error}</h3>
 </> )}
  return (
   <>
<div className="row">
{brandsProduct.map((product)=><div key={product._id} className="product py-5 md:w-6/12 px-3 lg:w-3/12 xl:w-2/12">
<img src={product.image} alt={product.name} />

</div>)}

</div>
</> )
}
