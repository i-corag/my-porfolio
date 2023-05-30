import { ThemeContext } from '@/context/ThemeContext';
import { BsGithub } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import { useState, useContext } from 'react';
import styles from '@/styles/Slider.module.css';
import projects from '../data/projects';


const Slider = () => {

    const { theme } = useContext(ThemeContext);
    const [current, setCurrent] = useState(0)

    return (
        <div className={styles.slider}>
            <div className={styles.slider_wrapper}>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className={index === current ? `${styles.slider_page} ${styles.active}` : `${styles.slider_page}`} style={{ backgroundImage: `url(${project.url})` }}>
                            <p className={styles.casa}>{project.text}</p>
                            <div className={styles.slider_link_wrapper}>
                                <a href={project.repository}
                                    className={theme ? `${styles.slider_link} ${styles.link_light}` : `${styles.slider_link} ${styles.link_dark}`}
                                    target="_blank" rel="noopener noreferrer"
                                    alt='/'><BsGithub size={30} />
                                </a>
                                <a href={project.web}
                                    className={theme ? `${styles.slider_link} ${styles.link_light}` : `${styles.slider_link} ${styles.link_dark}`}
                                    target="_blank" rel="noopener noreferrer"
                                    alt='/'><TfiWorld size={30} />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.slider_pagination}>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className={index === current ? `${styles.pagination} ${styles._active}` : `${styles.pagination}`} onClick={() => setCurrent(index)}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider