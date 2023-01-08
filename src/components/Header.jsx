import React, { useEffect, useRef } from 'react'
import header from './css/header.css'
import {BsSearch} from 'react-icons/bs'
import {BiMap, BiPhone, BiUser} from 'react-icons/bi'
import {GrCart} from 'react-icons/gr'
import CategoryDropdown from './CategoryDropdown'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
  const navItem = [
    {
      id: 0,
      subCategory: false,
      category: [],
      path: "/product/0",
      display: "Flash Sale"
    },
    {
      id: 1,
      subCategory: true,
      path:"/product/1",
      display: "Nam",
      category:[
        {
          id: 1,
          nameCategory:"Quần nam",
        },
        {
          id: 2,
          nameCategory:"Áo nam"
        },
        {
          id: 3,
          nameCategory:"Áo khoác nam"
        },
        {
          id: 4,
          nameCategory:"Áo sơ mi nam"
        }
      ]
    },
    {
      id: 2,
      subCategory: true,
      display: "Nữ",
      path: "/product/2",
      category:[
        {
          id: 1,
          nameCategory:"Quần nữ"
        },
        {
          id: 2,
          nameCategory:"Áo nữ"
        },
        {
          id: 3,
          nameCategory:"Áo khoác nữ"
        },
        {
          id: 4,
          nameCategory:"Áo sơ mi nữ"
        }
      ]
    },
    {
      id: 3,
      subCategory: false,
      path: "/product/3",
      display: "Trẻ em"
    },
    {
      id: 4,
      subCategory: false,
      path: "/product/4",
      display: "Đồng phục"
    }
  ]
  const  pathName  = useLocation();
  const activeNav = navItem.findIndex(e => e.path === pathName.pathname)
  const headerRef = useRef(null)
  useEffect(()=>{
    window.addEventListener("scroll",() => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('shrink')
      }else{
        headerRef.current.classList.remove("shrink")
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  },[])
  console.log(activeNav);
  return (
    <div className='header' ref={headerRef}>
        <div className='banner-top'>
            <img className='banner-image' src="https://bizweb.dktcdn.net/100/438/408/themes/890667/assets/bannertop.jpg?1672303543027" alt="banner" />
        </div>
        <div className='wrap-container'>
          <div className='topbar-wrap'>
            <div className="topbar-top">
              <div className="topbar-top-right">
                <div className="logo">
                  <img src="https://bizweb.dktcdn.net/100/438/408/themes/890667/assets/logo.svg?1672303543027" alt="logo" />
                </div>
                <div className="theme-search-smart">
                  <div className="header-search">
                    <form action="" className='form-search'>
                      <input id='input-search' type="text" placeholder='Tìm kiếm...'/>
                      <BsSearch id='btn-search'/>
                    </form>
                  </div>
                </div>
              </div>
              <div className="topbar-top-left">
                <div className="list-contact">
                  <div className='address-contact'>
                    <BiMap className='bimap'/>
                    <p>Tìm 219 cửa hàng</p>
                  </div>
                  <div className='phone-contact'>
                    <BiPhone className='biphone'/>
                    <p>1800 9378</p>
                  </div>  
                </div>
              </div>
            </div>
            <div className="topbar-bottom">
              <div className="topbar-bottom-left">
                <nav className='nav-item'>
                  <div className='nav-item-1'>
                    {navItem.map((item) =>{
                      return(
                        <Link to={`${item.path}`} className={`item ${item.id === activeNav ? 'active' : ''}`} key={item.id}>{item.display}
                            {
                              item.subCategory && <CategoryDropdown subCategory = {item.category}/>
                            }
                        </Link>
                      )
                    })}
                  </div>
                </nav>
              </div>
              <div className="topbar-bottom-right">
                <div className="cart">
                    <GrCart className='grcart'/>
                    <span className='cart-count'>1</span>
                    <p className='cart-name'>GIỎ HÀNG</p>
                </div> 
                <div className="login-logout">
                  <BiUser className='biuser'/>
                  <p>ĐĂNG NHẬP / ĐĂNG KÝ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header