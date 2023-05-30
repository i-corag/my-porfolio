import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { useContext, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '@/context/ThemeContext';

const Header = () => {

    const { theme } = useContext(ThemeContext);

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={theme ? `${styles.header_wrapper} ${styles._light}` : `${styles.header_wrapper} ${styles._dark}`}>

            <div className={styles.header_nav_wrapper}>

                <div onClick={handleNav} className='theme_icon'>
                    {nav ?
                        <svg width="38px" height="38px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#4a4b51" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg>
                        :
                        <svg fill="#4a4b51" width="37px" height="37px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title /><path d="M75,20H40A20.06,20.06,0,0,0,20,40V75A20.06,20.06,0,0,0,40,95H75A20.06,20.06,0,0,0,95,75V40A20.06,20.06,0,0,0,75,20Zm0,55H40V40H75Zm95-27.5a10,10,0,0,0-10,10V75H125V40h17.5a10,10,0,0,0,0-20H125a20.06,20.06,0,0,0-20,20V75a20.06,20.06,0,0,0,20,20h35a20.06,20.06,0,0,0,20-20V57.5A10,10,0,0,0,170,47.5ZM75,105H40a20.06,20.06,0,0,0-20,20v35a20.06,20.06,0,0,0,20,20H75a20.06,20.06,0,0,0,20-20V125A20.06,20.06,0,0,0,75,105Zm0,55H40V125H75Zm85-55H125a20.06,20.06,0,0,0-20,20v35a20.06,20.06,0,0,0,20,20h35a20.06,20.06,0,0,0,20-20V125A20.06,20.06,0,0,0,160,105Zm0,55H125V125h35Z" /></svg>
                    }
                </div>

                <u className={nav ? styles.header_nav : styles.non_visible}>
                    <li>
                        <Link href='/#landing' scroll={false} className={styles.header_nav_link}>
                            <p className={theme ? styles.link_light : styles.link_dark}>↗home</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='#about' scroll={false} className={styles.header_nav_link}>
                            <p className={theme ? styles.link_light : styles.link_dark}>↗about</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='#work' scroll={false} className={styles.header_nav_link}>
                            <p className={theme ? styles.link_light : styles.link_dark}>↗work</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='#contact' scroll={false} className={styles.header_nav_link}>
                            <p className={theme ? styles.link_light : styles.link_dark}>↗contact</p>
                        </Link>
                    </li>
                </u>

            </div>
            <ThemeToggle />
        </div>
    )
}

export default Header