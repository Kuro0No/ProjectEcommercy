import React, { useContext, useState, useEffect, useCallback } from 'react'
import { ProductContext } from '../data/producstData/productContext'
import CheckBox from './Checkbox'
import { Link, useParams } from 'react-router-dom'


const Catalog = () => {
    const colors = ['Trắng', 'Đen', 'Vàng']
    const sizes = ['S', 'M', 'L']
    const initFilter = {
        color: [],
        size: []
    }
    const productList = useContext(ProductContext).products
    const getProduct = productList.products
    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)
    
    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {

                case "COLOR":
                    setFilter({ ...filter, color: [...filter.color, item] })
                    break
                case "SIZE":
                    setFilter({ ...filter, size: [...filter.size, item] })
                    break
                default:
            }
        } else {
            switch (type) {

                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item)
                    setFilter({ ...filter, color: newColor })
                    break
                case "SIZE":
                    const newSize = filter.size.filter(e => e !== item)
                    setFilter({ ...filter, size: newSize })
                    break
                default:
            }
        }
    }
    const updateProducts = useCallback(
        () => {
            let temp = productList

            if (filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.color.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }

            if (filter.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined
                })
            }

            setProducts(temp)
            
        },
        [filter, productList],
    )
        

    useEffect(() => {
        updateProducts()
    }, [updateProducts])
    
    return (
        <div className='container '>

            <div className='col-3'>
                <div>

                    <h4>Màu sắc</h4>
                    {colors.map((color, index) => (
                        
                        <CheckBox label={color} key={index} onChange={(input) => filterSelect("COLOR", input.checked, color)} checked={filter.color.includes(color)} />
                    ))}
                </div>
                <div>
                    <h4>Kích thước</h4>
                    {sizes.map((size, index) => (
                        <CheckBox label={size} key={index} onChange={(input) => filterSelect("SIZE", input.checked, size)} checked={filter.size.includes(size)} />
                    ))}
                </div>
            </div>
            <div className=' row '>

                {products.map((product, index) => (
                    <div className='mb-5 col-sm-6 col-lg-4' key={index}>

                        <Link active onClick={() => {window.scrollTo(0, 0)}} to={`/product/${product.id}/${product.name}`} key={index} className="card p-0" >
                            <div className="col">
                                <div className="card">
                                    <img src={product.img} className="card-img-top" alt="..." style={{ height: 260 + 'px', width: 100 + '%' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">{product.cost}$</p>
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

export default Catalog
