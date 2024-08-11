import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Products from '../Products/Products';
import Slider from "react-slick";


export default function ProductDetails() {
  let {id,category}= useParams();
  let [productDetalis, setProductDetalis] = useState(null);
  let [productcategory, setProductcategory] = useState([]);

 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
//     علشان لما ادوس على الصور يطلعلى الصورة بكلام 
function  getProductDetails(id){

 axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
.then(({data})=>{

  setProductDetalis(data.data)
  console.log(data.data);
})
.catch((erro)=>{

  setProductDetalis(erro)

})


}
//  علشان يجبلى المنتجات الى شبة المنتج دة 
function  getProductcategory(category){

axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
.then(({data})=>{
let allProducts=data.data
let related=allProducts.filter((product)=>product.category.name==category)
setProductcategory(related)
    console.log(allProducts);
  
})
.catch((erro)=>{

console.log(erro);

})


}
useEffect(()=>{

  getProductDetails(id);
  getProductcategory(category)

},[ id,category])

    


  return (
 
<>

<div className="row ">

<div className=" md:w-1/4 sm:w-2/4 lg:3/4 " >
<Slider {...settings}>
      {productDetalis?.images?.map((src)=>  <  img className='w-full' key={src.id} src={src} alt={productDetalis?.title} />
 )}
    </Slider>

</div>
<div className="w-3/4 p-6 ">
<h1 className=' text-lg font-normal text-gray-950'>{productDetalis?.title}</h1>
<p className=' text-gray-600 font-light'>{productDetalis?.description}</p>


<div className="flex justify-between my-2 ">
<span>
    {productDetalis?.price} EGP
</span>

<span> {productDetalis?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>

</div>

<button className='btn mt-6 '>add to cart</button>
</div>





</div>

<div className="row">
{productcategory.map((product)=> <div key={product.id} className="md:w-6/12 px-3 lg:w-3/12 xl:w-2/12   ">
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

</div> )}

  

</div>




















</>

  )
}
