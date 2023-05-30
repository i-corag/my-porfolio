import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import useWindowSize from './useWindowSize'
import styles from '@/styles/Landing.module.css';

const Landing = () => {

    const { theme } = useContext(ThemeContext);
    const size = useWindowSize();

    return (
        <div className={styles.landing_wrapper} id='landing'>
            <div className={styles.titles_wrapper}>
                <h1 className={theme ? styles.landing_title_light : styles.landing_title_dark}>Hola! I&apos;m Ivana, <br />a fullstack developer</h1>
                {size.width > 620 && <h3>Let&apos;s shape the future, one line of code at a time</h3>}
            </div>


        </div>
    )
}

export default Landing