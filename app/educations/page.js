import DeskTopMobileRender from "@/components/DeskTopMobileRender";
import EducationJourney from "@/components/EducationJourney/EducationJourney";
import MobileEducationJourney from "@/components/mobile/MobileEducationJourney";
import MobileNavigation from "@/components/mobile/MobileNavigation";
import NavBar from "@/components/NavBar";

const Educations = () => {
    return ( 
        <div className="flex overflow-hidden flex-col text-base bg-black text-neutral-400">
            <DeskTopMobileRender DeskTopComponent={NavBar} MobileComponent={MobileNavigation}/>
            <DeskTopMobileRender DeskTopComponent={EducationJourney} MobileComponent={MobileEducationJourney}/>
        </div>
    );
}
 
export default Educations;