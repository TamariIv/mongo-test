"use client"
import React from "react";
import styles from "./carCard.module.css";
import { FaEdit } from "react-icons/fa";


export default function CarCard({ car }) {


    return (
        /* From Uiverse.io by alexruix */
        <div className={styles.card}>
            <div className={styles.carDetails}>
                <p className={styles.carModel}>{car.model}</p>
                <p className={styles.carDetail}>{car.color}</p>
                <p className={styles.carDetail}>{car.plate}</p>
                <FaEdit className={styles.editIcon}/>
                </div>
            <button className={styles.cardButton}>Delete</button>
        </div>
    )

}
