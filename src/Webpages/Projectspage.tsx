import NavBar from "../Components/HomePage/NavBar/NavBar";
import ProjectCard from "../Components/ProjectsPage/ProjectCard/ProjectCard";
import ViewSettings from "../Components/ProjectsPage/ViewSettings/ViewSettings";

function Projectspage() {
return(
       <>
       <header> <NavBar /> </header>
       <div className="projectspage-body">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
       </div>
       <footer> <ViewSettings /> </footer>

       </>
);
}

export default Projectspage