import React from 'react';

import classNames from 'classnames/bind';
import styles from './SideBar.module.scss'

const cx = classNames.bind(styles)


function SideBar({ children }) {
    return (
        <div className={cx('container')}>
            {children}
        </div>
    )
}
export default SideBar;