import React from 'react';
import { motion } from 'framer-motion'

import classNames from 'classnames/bind';
import styles from './HomeLoggedIn.module.scss'
import Button from '../../components/Button';

const cx = classNames.bind(styles)
const transition = { type: 'spring', duration: 3 }
function HomeLoggedIn() {

    return (
        <div className={cx("container")}>

            {/* Advertisement */}
            <div className={cx("Advertise")}>
                <motion.div
                    initial={{ left: '238px' }}
                    whileInView={{ left: '8px' }}
                    transition={{ ...transition, type: 'tween' }}
                    className={cx("animation")}>
                </motion.div>
                <span>the best fitness club in the town</span>
            </div>

            {/* Tittle */}
            <div className={cx("title")}>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live your life to the fullest</span>
                </div>
            </div>
            <div className={cx('actions')}>
                <div>
                    <span>30days left</span>
                    <span>EXPERT COACHES  <span className={cx('extend')}>EXTEND NOW</span></span>

                </div>
                <div>
                </div>
            </div>
            <Button primary className={cx('btn')}>Get Started</Button>
            <Button outline className={cx('btn')}>Learn More</Button>
        </div>
    )
}

export default HomeLoggedIn;