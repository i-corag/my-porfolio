import { ThemeContext } from '@/context/ThemeContext';
import { BsGithub } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import { useContext } from 'react';
import styles from '@/styles/ProjectsSm.module.css';

const ProjectsSm = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.projects_wrapper}>

            {/* project 1 */}
            <div className={`${styles.project_card} ${styles._1}`}>
                <p>react.js app with firebase authentication and data storage.</p>
                <div className={styles.project_link_wrapper}>
                    <a
                        className={theme ? `${styles.project_link} ${styles.link_light}` : `${styles.project_link} ${styles.link_dark}`}
                        href='https://github.com/i-corag/crypto-react-app'
                        target="_blank" rel="noopener noreferrer"
                        alt='/'><BsGithub size={30} />
                    </a>
                    <a
                        className={theme ? `${styles.project_link} ${styles.link_light}` : `${styles.project_link} ${styles.link_dark}`}
                        href='https://crypto-app-sable.vercel.app'
                        target="_blank" rel="noopener noreferrer"
                        alt='/'><TfiWorld size={30} />
                    </a>
                </div>
            </div>

            {/* project 2 */}
            <div className={`${styles.project_card} ${styles._2}`}>
                <p>ecommerce web app developed with react.js in the frontend and powered by node.js and express.js in the backend. data storage is handled by a mySQL database.</p>
                <div className={styles.project_link_wrapper}>
                    <a
                        className={theme ? `${styles.project_link} ${styles.link_light}` : `${styles.project_link} ${styles.link_dark}`}
                        href='https://github.com/i-corag/fullstack-ecommerce'
                        target="_blank" rel="noopener noreferrer"
                        alt='/'><BsGithub size={30} />
                    </a>
                    <a
                        className={theme ? `${styles.project_link} ${styles.link_light}` : `${styles.project_link} ${styles.link_dark}`}
                        href='https://ecommerce-fontend.vercel.app/home'
                        target="_blank" rel="noopener noreferrer"
                        alt='/'><TfiWorld size={30} />
                    </a>
                </div>
            </div>

            {/* project 3 */}
            <div className={`${styles.project_card} ${styles._3}`}>
                <p>weather app in next.js fetching data from weather map API</p>
                <div className={styles.project_link_wrapper}>
                    <a
                        className={theme ? `${styles.project_link} ${styles.link_light}` : `${styles.project_link} ${styles.link_dark}`}
                        href='https://github.com/i-corag/nextjs-weather-app'
                        target="_blank" rel="noopener noreferrer"
                        alt='/'><BsGithub size={30} />
                    </a>
                    <a
                        className={theme ? `${styles.project_link} ${styles.link_light}` : `${styles.project_link} ${styles.link_dark}`}
                        href=''
                        alt='/'><TfiWorld size={30} />
                    </a>
                </div>
            </div>

            {/* project 4 */}
            <div className={`${styles.project_card} ${styles._4}`}>
                <p>real time chat app using node.js, socket.io and react.js</p>
                <div className={styles.project_link_wrapper}>
                    <a
                        className={theme ? `${styles.project_link} ${styles.link_light}` : `${styles.project_link} ${styles.link_dark}`}
                        href='https://github.com/i-corag/chat-react-express-socket'
                        target="_blank" rel="noopener noreferrer"
                        alt='/'><BsGithub size={30} />
                    </a>
                    <a
                        className={theme ? `${styles.project_link} ${styles.link_light}` : `${styles.project_link} ${styles.link_dark}`}
                        href=''
                        alt='/'><TfiWorld size={30} />
                    </a>
                </div>
            </div>

        </div>

    )
}

export default ProjectsSm