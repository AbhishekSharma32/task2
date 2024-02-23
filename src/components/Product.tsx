import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../redux/actions/productAction';
import { IProduct, ProductState } from '../types/userInterface';
import { useNavigate } from 'react-router-dom';
import { resetAllData } from '../redux/actions/userActions';

const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productList = useSelector((state: ProductState) => state?.product?.product);
    const [cachedProductList, setCachedProductList] = useState<IProduct[]>([]);

    useEffect(() => {
        const cachedData = localStorage.getItem('productList');
        if (cachedData) {
            setCachedProductList(JSON.parse(cachedData));
        } else {
            dispatch(getProductList());
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('productList', JSON.stringify(productList));
        setCachedProductList(productList);

    }, [productList]);

    const handleLogout = () => {
        localStorage.clear();
        dispatch(resetAllData());
        navigate('/');
    };

    return (
        <div className="container">
            <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-primary" onClick={handleLogout}>LogOut</button>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Thumbnail</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cachedProductList &&
                                cachedProductList.length > 0 &&
                                cachedProductList.map(({ thumbnail, title, price }, index) => (

                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><img src={thumbnail} style={{ height: "50px" }} alt={`Thumbnail ${index}`} /></td>
                                        <td>{title}</td>
                                        <td>{price}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            );
};

export default Product;
