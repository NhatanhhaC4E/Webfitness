import React from 'react';
import classNames from 'classnames/bind';

import Header from '../HeaderComponent/indexHeader';
import styles from './HomePageLayout.module.scss';
import SideBar from '../DefaultLayout/Sidebar/SideBarIndex';
import Programs from '../../../pages/home/Programs/Programs';


const cx = classNames.bind(styles)

function HomePageLayout({ children }) {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx("background")}>
                    <div className={cx("content")}>
                        <Header />
                        {children}
                    </div>
                    <div className={cx("blur")}></div>
                </div>
                <div className={cx('sidebar')}>
                    <SideBar />
                </div>

            </div>
            <Programs className={cx('programs')} />
        </>
    )
}

export default HomePageLayout;