import React from 'react';
import { motion } from 'framer-motion'

import classNames from 'classnames/bind';
import styles from './home.module.scss'


const cx = classNames.bind(styles)
const transition = { type: 'spring', duration: 3 }
function Home() {
    return (
        <div className={cx("container")}>
            <div className={cx("Advertise")}>
                <motion.div
                    initial={{ left: '238px' }}
                    whileInView={{ left: '8px' }}
                    transition={{ ...transition, type: 'tween' }}
                    className={cx("animation")}>

                </motion.div>
                <span>the best fitness club in the town</span>
            </div>
        </div>
    )
}

export default Home