import NavBar from "@/components/NavBar";
import SkillSection from "@/components/Skills/SkillSection";
import SkillsOverview from "@/components/Skills/SkillsOverview";

const Skills = () => {
    return ( 
        <div className="flex overflow-hidden flex-col text-base bg-black text-neutral-400">
            <NavBar/>
            <SkillsOverview/>
        </div>
     );
}
 
export default Skills;