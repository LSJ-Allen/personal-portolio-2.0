import NavBar from "@/components/NavBar";
import ProjectsPage from "@/components/projects/ProjectsPage";

const Projects = () => {
    return ( 
        <div className="flex overflow-hidden flex-col text-base bg-black text-neutral-400">
            <NavBar/>
            <ProjectsPage/>
        </div>
     );
}
 
export default Projects;