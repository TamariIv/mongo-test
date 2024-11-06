"use client"
import { useEffect, useState } from "react";
import CarCard from "../carCard/carCard";
import styles from "./carsList.module.css";

export default function CarsList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/cars");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.grid}>
            {items.map((item) => (
                <CarCard key={item._id} car={item} />
            ))}
        </div>
    );
}
