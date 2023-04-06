import { NavLink } from 'react-router-dom';
import './style.css'


export function Project({project}){
     return (
          <NavLink to={`/project/${project.id}`}>
               <li className="project">
                         <img src={project.img} alt={project.title} className="project__img" />
                         <h3 className="project__title">{project.title}</h3>
               </li>
          </NavLink>
     );
}