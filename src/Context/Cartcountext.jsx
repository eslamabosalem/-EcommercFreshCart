import axios from "axios";
import { createContext } from "react";
import { UserContext } from "../UserContext/UserContext";

 export let  CartContext= createContext()


 export default function cartContextProvider(props){
  



    let headers={
        token:localStorage.getItem("usertoken")
    }
function  getLoggedUserCard(){
 
 return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
headers
})
.then((response)=>

response
)
.catch((error)=>

 error
)}

function addProductToCart(productId){
 return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{ 
    productId:productId
 },{
    headers
 })
 .then((response)=>
 response
 )
 .catch((error)=> error
 )

}
function deletProductItem(productId){
 return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{ 
   
 headers
 })
 .then((response)=>
 response
 )
 .catch((error)=> error
 )

}
function updateCArtitemCount(productId,count){
 return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{ 
    count:count
 },{

    headers
 })
 .then((response)=>
 response
 )
 .catch((error)=> error
 )

}











return(
    <>
 
    <CartContext.Provider value={{getLoggedUserCard,addProductToCart,deletProductItem,updateCArtitemCount}}>
        {props.children}
    </CartContext.Provider>
    
    
    
    </>
)







}

