import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/Cartcountext'
import useProducts from '../../Hooks/useProducts'
import {RingLoader} from "react-spinners"

 
export default function Cart() {
 
const [cartDetalies, setCartDetalies] = useState(null)
  let {getLoggedUserCard,updateCArtitemCount,deletProductItem}=useContext(CartContext);
   async function getCartItem(){
    let response= await getLoggedUserCard();
    console.log(response.data.data);
    setCartDetalies(response?.data?.data)
  }
  async function updateCartCount(productId,count){
   let response= await updateCArtitemCount(productId,count);
   console.log(response.data.data);
   setCartDetalies(response?.data?.data)
 } 
  async function deletItem(productId){
   let response= await deletProductItem(productId);
   console.log(response.data.data);
   setCartDetalies(response?.data?.data)
 }

  useEffect(()=>{
  
    getCartItem();
  
  },[])
let {data, error,isError,isLoading,isFetched}=useProducts();
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
 <div className="relative overflow-x-auto  sm:rounded-lg">
  <h2 className=' text-3xl text-center text-green-600 py-5'>Shopping Cart </h2>
  <h3 className='text-center text-slate-600 text-lg font-light' >Totle Cart Price:{cartDetalies?.totalCartPrice}EGP</h3>
  <table className="w-3/4  mx-auto my-6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
   {cartDetalies?.products.map((product)=>   <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button onClick={()=>updateCartCount(product.product.id,product.count-1)} className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div className="ms-3">
              <span>{product.count}</span>
            </div>
            <button onClick={()=>updateCartCount(product.product.id,product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price*product.count} Egp
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>deletItem(product.product.id)} className=" cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
        </td>
      </tr>)}
   
    </tbody>
  </table>
</div>


   
   
   
   
   
   
   </>
  )
}






