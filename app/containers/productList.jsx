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