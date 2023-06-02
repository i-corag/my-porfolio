import icons from '../data/icons'
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { BsArrowUpRight } from 'react-icons/bs'
import styles from '@/styles/Work.module.css';
import ProjectsSm from './ProjectsSm'
import ProjectsMd from './ProjectsMd'
import useWindowSize from './useWindowSize'


const Work = () => {

    const { theme } = useContext(ThemeContext);
    const size = useWindowSize();

    return (
        <section className={styles.work_wrapper} id='work'>
            <div className={styles.work_projects_wrapper}>
                <div className={theme ? `${styles.work_text} ${styles.link_light}` : `${styles.work_text} ${styles.link_dark}`}>
                    <p>Browse through some personal projects crafted to enhance my skills and knowledge as a fullstack developer</p>
                    <div className={styles.work_link}>
                        <a
                            className={theme ? `${styles.link_light}` : `${styles.link_dark}`}
                            href='https://github.com/i-corag'
                            target="_blank" rel="noopener noreferrer"
                            alt='/'><BsArrowUpRight /> more in github
                        </a>
                    </div>
                </div>
                {size.width < 720 && <ProjectsSm />}
                {size.width > 720 && <ProjectsMd />}
            </div>

            <div className={styles.technologies_wrapper}>
                <p className={theme ? `${styles.link_light}` : `${styles.link_dark}`}>SO FAR I WORK WITH</p>
                <ul className={styles.work_icon_mobile}>
                    {icons.map((icon) => {
                        return <li className={styles.work_icon} key={icon}><img src={icon} /></li>
                    })}
                </ul>
                <ul className={`${styles.work_icon_desktop} ${styles.primary}`}>
                    {icons.map((icon) => {
                        return <li className={styles.work_icon} key={icon}><img src={icon} /></li>
                    })}
                </ul>
                <ul className={`${styles.work_icon_desktop} ${styles.secondary}`}>
                    {icons.map((icon) => {
                        return <li className={styles.work_icon} key={icon}><img src={icon} /></li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Work