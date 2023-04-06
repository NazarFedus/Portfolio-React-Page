import './style.css'
import sun from './sun.svg'
import moon from './moon.svg'
import { useEffect, useRef, useState } from 'react';

export function BtnDarkMode(){

     const [darkMode, setDarkMode] = useState(true);
     const btnRef = useRef(null);

     useEffect(() => {
          document.body.classList.toggle('dark');
          btnRef.current.classList.toggle('dark-mode-btn--active')
     }, [darkMode])

     return (
          <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)} ref={btnRef}>
               <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
               <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
     );
}