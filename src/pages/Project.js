import img from './../img/projects/02-big.jpg';
import githubIcon from './../img/icons/gitHub-black.svg';


export function Project(){
     return(
          <main className="section">
               <div className="container">
                    <div className="project-details">

                         <h1 className="title-1">Video service</h1>

                         <img src={img} alt="" className="project-details__cover" />

                         <div className="project-details__desc">
                              <p>Skills: React, Node.js, MongoDB</p>
                         </div>

                         <a href="#!" className="btn-outline">
                              <img src={githubIcon} alt="" />
                              GitHub repo
                         </a>

                    </div>
               </div>
          </main>
     );
}