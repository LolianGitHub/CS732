import React from 'react';
import styles from './flower.module.css';

export default function Flower(props) {
    return (
        <div className={styles.flower}>
            <img src="./jasmine-flower.svg" />
        </div>
    );
}