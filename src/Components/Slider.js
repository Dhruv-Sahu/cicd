import React from 'react';
import styles from './Slider.module.css'

const Slider = () => {
    return (
        <div style={{
            borderColor: "#eee", backgroundColor: "rgb(255,247,236)",

        }}><div style={{
            display: 'grid', background: "#112B3C"
        }} className={styles.wordCarousel}>
                <span style={{ textAlign: "center" }} >Did You Know? </span>
                <div>
                    {/* <!-- Use classes 2,3,4, or 5 to match the number of words --> */}
                    <ul className={styles.flip5} style={{ color: "#1fc050", textAlign: "center" }} >
                        <li style={{ color: "#1fc050" }}>Oxygen was poisonous to the organisms that populated the early Earth!</li>
                        <li style={{ color: "#1fc050" }}>Dino-flagellate, a certain species of algae produces bioluminescence!</li>
                        <li style={{ color: "#1fc050" }}>Half the oxygen you breathe in, was made by Algae! </li>
                        <li style={{ color: "#1fc050" }}>All plants evolved from Algae.</li>
                        <li style={{ color: "#1fc050" }}>Scientists believe that Algae produce 87% of the world’s oxygen.
                        </li>
                    </ul>
                </div>
            </div></div >
    )
}

export default Slider