import './style.css'
import githubIcon from './gitHub-black.svg';

export function BtnGitHub({link}){
     return (
          <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
               <img src={githubIcon} alt="" />
               GitHub repo
          </a>
     );
}