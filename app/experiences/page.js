import ProfessionalExperience from "@/components/ProfessionalExperience/ProfessionalExperience";
import NavBar from "@/components/NavBar";
import DeskTopMobileRender from "@/components/DeskTopMobileRender";
import MobileNavigation from "@/components/mobile/MobileNavigation";
const Experiences = () => {
    return ( 
        <div className="flex overflow-hidden flex-col text-base bg-black text-neutral-400">
            <DeskTopMobileRender DeskTopComponent={NavBar} MobileComponent={MobileNavigation}/>
            <ProfessionalExperience/>
        </div>
     );
}
 
export default Experiences;