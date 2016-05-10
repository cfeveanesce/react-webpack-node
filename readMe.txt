1. 

/****************product List page***************/
in routes.jsx add 

import ProductList from 'containers/productList';

<Route path="productList" component={productList} />

2. in Navigation.jsx add 

<Link to="/productList" className={cx('item')} activeClassName={cx('active')}>Product List</Link>


3. add productList.css in css/components

.productMsg{
    border:1px solid #000; width:100px; height:20px;
    margin:0 0 5px 0;
}

.productList{
    border:1px solid #000; width:100px; height:50px;
    margin:5px 0 5px 0;
}

.list{
    border:1px solid #000; width:100px; height:20px;
    margin:5px 0 0 0;
}


4. add productList.jsx in app/components
import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/productList';

const cx = classNames.bind(styles);

const ProductList = () => {
    return (
        <ul className={cx('productList')}>
            <span className={cx('productMsg')}>This is Product List</span>
            <li className={
          cx('li', 'list')
        }>Product 1 </li>
            <li className={
          cx('li', 'list')
        }>Product 2</li>
            <li className={
          cx('li', 'list')
        }>Product 3</li>
        </ul>
    );
};

export default ProductList;
 




/****************side bar***************/

1. add sideBar.jsx in app/components  folder




import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/sideBar';

const cx = classNames.bind(styles);

const SideBar = () => {
    return (
        <div className={cx('productList')}>

        </div>
    );
};

export default SideBar;



2. sideBar.css  in components/ css folder

.sidebar {
    position:absolute;
    top:0; bottom:0; left:0;
    width:50px;
    background:#000;
}