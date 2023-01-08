import React from 'react'
import { Link } from 'react-router-dom';

const CategoryDropdown = ({subCategory}) => {
  return (
    <>
        <div className='drop-down'>
            {
                subCategory.map((item)=> {
                    return (
                        <Link key={item.id} className='sub-item' to={`/category/${item.id}`}>
                            {item.nameCategory} 
                        </Link>
                    
                    )
                })
            }
        </div>
    </>
  )
}

export default CategoryDropdown