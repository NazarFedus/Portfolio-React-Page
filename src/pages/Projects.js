import { Project } from "../components/project/Project"

import { projects } from "../helpers/projectsList";


export default function Projects(){
     return(
          <main className="section">
               <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">

                         {projects.map(el => {
                              return <Project project={el}></Project>
                         })}

                    </ul>
               </div>
          </main>
     );
}