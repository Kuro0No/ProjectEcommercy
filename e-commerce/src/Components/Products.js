import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../data/producstData/productContext'
import Catalog from './Catalog'


const Products = () => {

  const products = useContext(ProductContext)
  const colors = ['Trắng', 'Đen', 'Vàng']
  const sizes = ['S', 'M', 'L']




  return (
    <div className='container'>
     <Catalog/>
     
      <div className=' row '>
        {products.products.map((product, index) => (
          <div className='mb-5 col-sm-6 col-lg-4' key={index}>

            <Link active to={`/product/${product.id}/${product.name}`} key={index} className="card p-0" >
              <div className="col">
                <div className="card">
                  <img src={product.img} className="card-img-top" alt="..." style={{height: 260 +'px', width: 100 + '%'}} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}$</p>
                  </div>
                </div>
              </div>
            </Link >
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
