import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const ThemeToggle = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            {theme ? (
                <div onClick={() => setTheme(!theme)} className='theme_icon'>
                    <svg width="38px" height="38px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#4a4b51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z" /></svg>
                </div>
            ) : (
                <div onClick={() => setTheme(!theme)} className='theme_icon'>
                    <svg fill="#4a4b51" width="40px" height="40px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title /><path d="M100,45a55,55,0,1,0,55,55A54.84,54.84,0,0,0,100,45Zm0,90a35,35,0,1,1,35-35A34.78,34.78,0,0,1,100,135ZM55,42a9.41,9.41,0,0,0,13.5,3.5A9.41,9.41,0,0,0,72,32l-4-6.5A9.41,9.41,0,0,0,54.5,22a9.77,9.77,0,0,0-3,13.5Zm90,116a9.86,9.86,0,1,0-17,10l4,6.5a9.41,9.41,0,0,0,13.5,3.5c5-3,6.5-9,3.5-13.5l-4-6.5ZM27.5,90H20a10,10,0,0,0,0,20h7.5a10,10,0,0,0,0-20ZM180,90h-7.5a10,10,0,0,0,0,20H180a10,10,0,0,0,0-20ZM69,154a9.69,9.69,0,0,0-13.5,3.5l-4,6.5A9.69,9.69,0,0,0,55,177.5c5,2.5,11,1,13.5-3.5l4-6.5A10.4,10.4,0,0,0,69,154ZM131.5,46A9.69,9.69,0,0,0,145,42.5l4-6.5a10.56,10.56,0,0,0-4-14c-5-2.5-11-1-13.5,3.5l-4,6.5A10.56,10.56,0,0,0,131.5,46Z" /></svg>
                </div>
            )}
        </div>
    )
}

export default ThemeToggle