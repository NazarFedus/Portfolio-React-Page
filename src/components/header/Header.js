import './style.css';
import file from './Nazarii_Fedus_CV.pdf'


export function Header (){
     return (
          <header className="header">
               <div className="header__wrapper">
                    <h1 className="header__title">
                         <strong>Hi, my name is <em>Nazarii</em></strong><br />
                         a frontend developer
                    </h1>
                    <div className="header__text">
                         <p>with passion for learning and creating.</p>
                    </div>
                    <a href="./Nazarii_Fedus_CV.pdf" className="btn" download={file}>Download CV</a>
               </div>
        </header>
     );
}