import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { counterContext } from '../../Context/Context'
import { UserContext } from '../../UserContext/UserContext'
import logo from "../../assets/logo.svg";

export default function Navbar() {
let{Userlogin ,setUserLogin}=useContext(UserContext)

//   usecontextبس لازم اعمل الاول  user countext دى الى جية من صفحة 
let {counter1,counter2,changrCounter}=useContext(counterContext)

let navigator=useNavigate();

function logout(){
  localStorage.removeItem("userToken")
  setUserLogin(null);
navigator("/login")
}


//   return (
//     <div>



// <nav className="bg-white border-gray-200 dark:bg-gray-900">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   
//         <img src="" className="h-8" alt="Flowbite Logo" />
//         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">freshCard</span>
//         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//           {Userlogin!==null ?<><li>
//         <NavLink to="">Home</NavLink>        </li>
//         <li>
//         <NavLink to="cart">Cart</NavLink>        </li>
//         <li>
//         <NavLink to="products">Products</NavLink>        </li>
//         <li>
//         <NavLink to="brands">Brands</NavLink>        </li>
//         <li>
//         <NavLink to="categories">Categories</NavLink>        </li>
//           </>:null}
        
//       </ul>
   
    
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor"  strokeLinecap="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//     <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
//       {Userlogin===null?<>  <li>
//         <NavLink to="register">Register</NavLink>  
//         </li>
//         <li>
//         <NavLink to="login">Login</NavLink> 
//         </li></>: <li onClick={logout}> <span  className=' cursor-pointer'>Loginout</span> </li> 
//       }
         
// <li><i className="fa-brands fa-facebook"></i></li>
// <li><i className="fa-brands fa-twitter"></i></li>
// <li><i className="fa-brands fa-instagram"></i></li>
// <li><i className="fa-brands fa-youtube"></i></li>
// <li><i className="fa-brands fa-tiktok"></i></li>




//     </ul>




//     </div>
//   </div>
// </nav>




//     </div>
//   )
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed  z-40  top-0 right-0 left-0 rounded">
      <div className="max-w-screen-xl flex gap-5 flex-wrap items-center mx-auto p-4">
        <Link to="">
    <span className="flex bg-lime-300 text-3xl items-center space-x-3 rtl:space-x-reverse cursor-pointer">
         <img src={logo} alt="" />
        
        </span>
        </Link>
       
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex ms-auto items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-xl xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* ! ul */}
        <div
          className="hidden w-full grow  xl:flex justify-between xl:w-auto "
          id="navbar-default"
        >
          <ul className="font-medium flex items-center flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-xl bg-gray-50 xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
          {Userlogin!==null ?  <>
                <li>
                  <Link
                    to=""
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
                  >
                    Home
                  </Link>
                  
                </li>
                <li>
                  <Link
                    to="cart"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="Products"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="categories"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="brands"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
                  >
                    Brands
                  </Link>
                </li>
          
              </>:null} 
             
            
          </ul>

          <ul className="font-medium flex items-center flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-xl bg-gray-50 xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
          {Userlogin===null? <>
                <li>
                  <Link
                    to="login"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="register"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
                  >
                    Register
                  </Link>
                </li>
              </>: <li onClick={logout}>
                <span className="block cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">
                  SignOut
                </span>
              </li>     }
             

                
            <li className="flex gap-4">
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
             <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
           <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
           <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-green-700 xl:p-0 dark:text-white xl:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
          <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
