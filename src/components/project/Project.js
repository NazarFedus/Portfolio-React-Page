import './style.css'
import project01 from "./../../img/projects/01.jpg"

export function Project(){
     return (
          <li className="project">
               <a href="./project-page.html">
                    <img src={project01} alt="Project img" className="project__img" />
                    <h3 className="project__title">Gaming streaming portal</h3>
               </a>
          </li>
     );
}