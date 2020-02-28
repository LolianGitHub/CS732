import React from 'react';
import styles from './staff-details.module.css';

export default function StaffDetails(props) {
    return (
        <table className={styles.table}>
            <tbody>
                {props.name && <tr><th>Name:</th><td>{props.name}</td></tr>}
                {props.department && <tr><th>Department:</th><td>{props.department}</td></tr>}
                {props.phoneNum && <tr><th>Ph #:</th><td>{props.phoneNum}</td></tr>}
                {props.email && <tr><th>Email:</th><td>{props.email}</td></tr>}
            </tbody>
        </table>
    );
}