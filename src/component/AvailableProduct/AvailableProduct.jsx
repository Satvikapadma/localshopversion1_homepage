import React, { useState } from 'react'
import Sitebar from '../sitebar/Sitebar'
import Nav from '../narbar/Nav'
import "./AvailableProduct.css";

import ExpertProductPdf from './ExpertProductPdf';
import { useNavigate } from 'react-router-dom';
function AvailableProduct() {
const navigation=useNavigate();
    const imageUrl="https://m.media-amazon.com/images/I/81+d6eSA0eL._SY741_.jpg";
    const imageUrl2="https://m.media-amazon.com/images/I/71bDJ9wxxWL._AC_UY327_FMwebp_QL65_.jpg";
    const imageUrl3="https://m.media-amazon.com/images/I/71KjsJ0cCtL._AC_UY327_FMwebp_QL65_.jpg";
    const imageUrl4="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/fb4ac5fb-5b1e-49ce-ab7b-19443a44b32c._CR30,0,1200,628_SX507_QL70_.jpg";
    const data = [
        { id: 1,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640',quantity:'10' },
        { id: 2,image:imageUrl2, name: 'Lenovo Laptop',category:"electronic",brand:"Lenovo",value: '55000',quantity:'10' },
        { id: 3,image:imageUrl3, name: 'Hp Laptop',category:"electronic",brand:"Hp",value: '50000',quantity:'10' },
        { id: 4,image:imageUrl4, name: 'Mobile',category:"electronic",brand:"MI",value: '15000' ,quantity:'10'},
        { id: 5,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640',quantity:'10' },
        { id: 6,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640' ,quantity:'10'},
        { id: 7,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640' ,quantity:'10'},
        { id: 8,image:imageUrl2, name: 'Lenovo Laptop',category:"electronic",brand:"Lenovo",value: '55000',quantity:'10' },
        { id: 9,image:imageUrl3, name: 'Hp Laptop',category:"electronic",brand:"Hp",value: '50000',quantity:'10' },
        { id: 10,image:imageUrl4, name: 'Mobile',category:"electronic",brand:"MI",value: '15000',quantity:'10' },
        { id: 11,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640',quantity:'10' },
        { id: 12,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640',quantity:'10' },
        { id: 13,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640',quantity:'10' },
        { id: 14,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640',quantity:'10' },
        { id: 15,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640',quantity:'10' },
        { id: 16,image:imageUrl, name: 'watch',category:"fashion",brand:"TIMEWEAR",value: '640',quantity:'10' },

    
    ];
    const itemsPerPage =5;



    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const printPdf = () => {
        ExpertProductPdf(data);
    }


    
    return (
        <>
            <div className="container-addedit">
                <div className="top-container">
                    <Nav />
                </div>
                <div className="body-container">

                    <div className="left-body">
                        <Sitebar />
                    </div>


                    <div className="right-body-product">
                        <div className='tableDivproduct'>
                            <div className="inputProductSearch">
                                <div className="product-search-bar">
                                <i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder='Search product' />
                                </div>
                         
                            
                            <i className="fa-solid fa-print" id='pdfproducticon'  onClick={()=>printPdf()}></i>
                            <i className="fa-solid fa-plus" id='addproduct'  onClick={()=>navigation("/shop/products")}></i>
                            </div>

                            <div className="productTable">
                                <table border="0" cellSpacing="0" cellPadding="0">
                                    <thead>
                                        <tr>
                                            {/* Table headers */}
                                            <th>id</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Brand</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentData.map((item, index) => (
                                            <tr key={index}>
                                                {/* Adjust according to your data structure */}
                                                <td>{item.id}</td>
                                                <td><img id='productImage' src={item.image} alt="" /></td>
                                                <td>{item.name}</td>
                                                <td>{item.brand}</td>
                                                <td>{item.category}</td>
                                                <td>{item.value}</td>
                                                <td>{item.quantity}</td>
                                                <td><i className="fa-regular fa-pen-to-square"  id='editProduct'></i>
                                                <i className="fa-solid fa-trash" id='deleteProduct'></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div  className='productTablefooter'>
                            <p>
                                Page {currentPage} of {totalPages}
                            </p>
                                <button onClick={prevPage} disabled={currentPage === 1}>
                               <i className="fa-solid fa-angle-left"></i> Prevoius
                                </button>
                                <button onClick={nextPage} disabled={currentPage === totalPages}>
                              Next  <i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                        
                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}

export default AvailableProduct
