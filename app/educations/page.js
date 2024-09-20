import EducationJourney from "@/components/EducationJourney/EducationJourney";
import NavBar from "@/components/NavBar";

const Educations = () => {
    return ( 
        <div className="flex overflow-hidden flex-col text-base bg-black text-neutral-400">
            <NavBar/>
            <EducationJourney/>
        </div>
    );
}
 
export default Educations;