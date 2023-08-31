import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import styles from "./Home.module.css"

const Home = () =>{
    return (
        <div className={styles.home_container}>
            <h1>Home</h1>
            <CalendarComponent/>
        </div>
    );
};

export default Home