import ProfessionalExperience from "@/components/ProfessionalExperience/ProfessionalExperience";
import NavBar from "@/components/NavBar";
const Experiences = () => {
    return ( 
        <div className="flex overflow-hidden flex-col text-base bg-black text-neutral-400">
            <NavBar/>
            <ProfessionalExperience/>
        </div>
     );
}
 
export default Experiences;