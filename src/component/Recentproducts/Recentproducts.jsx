
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RingLoader } from "react-spinners"
import { CartContext } from '../../Context/Cartcountext'
import toast from 'react-hot-toast'

export default function Recentproducts() {

  let { addProductToCart } = useContext(CartContext);
  const [Loading, setLoading] = useState(false)
  const [currentProductId, setcurrentProductId] = useState(0)
  async function addProduct(productId) {
    setcurrentProductId(productId)
    setLoading(true)
    let response = await addProductToCart(productId);
    setcurrentProductId(productId)
    setLoading(false)
    // tooster
    if (response.data.status === "success") {
      toast.success(response?.data?.message, {

        duration: 1000,
        position: "botton-left"

      })
    } else {
      setLoading(false)
      toast.error(response?.data?.message, {

        duration: 1000,
        position: "botton-left"

      })
    }

    console.log(response);
  }

  function getRecent() {

    return axios.get("https://ecommerce.routemisr.com/api/v1/products")
  }

  let { isLoading, error, isError, data, isFetched } = useQuery({
    queryKey: ["recentproducts"],
    queryFn: getRecent,
    staleTime: 1000,
  })
  console.log(data);

  if (isLoading) {


    return (
      <>
        <div className=" py-8 text-center w-full flex justify-center"><RingLoader color='green'></RingLoader></div>
      </>) }
  if (isError) {
    return (
      <>
        <div className=" py-8 text-center w-full flex justify-center"><RingLoader color='green'></RingLoader></div>
        <h3>{error}</h3>
      </>) }
  return (
    <>
      <div className="row  ">
        {data?.data?.data.map((product) => <div key={product.id} className="md:w-6/12 px-3 lg:w-3/12 xl:w-2/12 ">


          <div className="product">
            <Link to={`/ProductDetails/${product.id}/${product?.category?.name}`}>
              <img className='w-full' src={product.imageCover} alt={product.title} />
              <span className='block font-light text-green-600'>{product?.category?.name}</span>
              <h3 className="text-lg font-normal text-gray-800 mb-4">{product.title.split(" ").slice(0, 2).join(" ")}</h3>

              <div className="flex justify-between  ">
                <span>
                  {product.price} EGP
                </span>
                <span> {product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
              </div>
            </Link>
            <button onClick={() => addProduct(product.id)} className='btn  '>
              {currentProductId === product.id && Loading ? <i className="fas fa-spinner fa-spin"></i> : "add to cart"}
            </button>

          </div>
        </div>
        )}
         </div>
    </>
  )
}
