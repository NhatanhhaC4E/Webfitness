import React from 'react';
import classNames from 'classnames/bind';

import Header from '../Header/indexHeader';
import styles from './DefaultLayout.scss';
import SideBar from './Sidebar/SideBarIndex';


const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx("content")}>
                <Header />
                {children}
            </div>
            <SideBar />
        </div>
    )
}

export default DefaultLayout;