import React from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)


function Header() {
    return (
        <div className={cx("container")}>
            <div className={cx("logo")}>
                <span>THE</span> <span>FIT CLUB</span>
            </div>
            <ul className={cx('narBar')}>
                <li className={cx('item')}>Home</li>
                <li className={cx('item')}>Programs</li>
                <li className={cx('item')}>Why Us</li>
                <li className={cx('item')}>Products</li>
            </ul>
        </div>

    )

}

export default Header;