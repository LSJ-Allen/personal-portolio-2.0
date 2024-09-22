import NavBar from "@/components/NavBar";
import ProjectsPage from "@/components/projects/ProjectsPage";
import DeskTopMobileRender from "@/components/DeskTopMobileRender";
import MobileNavigation from "@/components/mobile/MobileNavigation";

const Projects = () => {
    return ( 
        <div className="flex overflow-hidden flex-col text-base bg-black text-neutral-400">
            <DeskTopMobileRender DeskTopComponent={NavBar} MobileComponent={MobileNavigation}/>
            <ProjectsPage/>
        </div>
     );
}
 
export default Projects;