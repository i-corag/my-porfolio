import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { BsArrowDownLeft } from 'react-icons/bs'
import styles from '@/styles/About.module.css';

const About = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={styles.about_wrapper} id='about'>
            <div className={styles.about_picture}></div>
            <div className={theme ? `${styles.about_text} ${styles._light}` : `${styles.about_text} ${styles._dark}`}>
                <div className={styles.mobile}><h4>ABOUT</h4></div>
                <div className={styles.about_text_p}>
                    <p className={styles.desktop}>Hello there! I&apos;m Ivana, a professional blend of technical prowess, analytical thinking, and adaptability. Originally trained as a chemical engineer, I have a strong foundation in problem-solving, process optimization, and attention to detail. After working in the field for several years, I took a hiatus to embark on a journey of self-discovery and find my genuine passion. This introspective break and creative exploration were instrumental in unveiling my deep fascination with coding and its boundless potential to shape the future.<br />In a world that undergoes constant and rapid transformations, I believe that embracing an always-learning attitude not only expands my expertise but also cultivates resilience. This mindset keeps boredom at bay and injects excitement into each endeavor.<br />I&apos;m driven by new challenges and strive to push the boundaries of what&apos;s possible...So let&apos;s collaborate in creating meaningful solutions and making a positive impact together!</p>
                    <p className={styles.mobile}>Hi! I&apos;m Ivana, I recently discovered my deep fascination with coding and its limitless potential to shape the future.<br />Let&apos;s collaborate to create impactful solutions and make a positive difference together!</p>
                </div>
                <div className={styles.about_link}>
                    <a href='https://drive.google.com/file/d/1os-zJx5wpxv3xpWLPHxfYkh3btgCAprO/view?usp=share_link'
                        target="_blank" rel="noopener noreferrer"
                        alt='curriculum'>
                        <p><BsArrowDownLeft />resume</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About