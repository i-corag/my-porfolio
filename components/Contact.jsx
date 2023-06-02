import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { BsArrowUpRight } from 'react-icons/bs'
import styles from '@/styles/Contact.module.css';

const Contant = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={styles.contact} id='contact'>
            <div className={styles.contact_wrapper}>
                <div className={styles.contact_title}>
                    <h4>thanks for checking out</h4>
                </div>
                <div className={styles.contact_menu}>
                    <div className={styles.contact_link}>
                        <a
                            className={theme ? `${styles.link_light}` : `${styles.link_dark}`}
                            href="mailto:icoraglio@gmail.com?Subject=We%20want%20to%20hear%20more%20from%20you"
                            target="_blank" rel="noopener noreferrer"
                            alt='/'>
                            <BsArrowUpRight />icoraglio@gmail
                        </a>
                    </div>
                    <div className={styles.contact_link}>
                        <a className={theme ? `${styles.link_light}` : `${styles.link_dark}`}><BsArrowUpRight />+31 6 29 75 99 60</a>
                    </div>
                    <div className={styles.contact_link}>
                        <a
                            className={theme ? `${styles.link_light}` : `${styles.link_dark}`}
                            href="https://www.linkedin.com/in/ivana-coraglio-05a34680/"
                            target="_blank" rel="noopener noreferrer"
                            alt='/'><BsArrowUpRight />linkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contant