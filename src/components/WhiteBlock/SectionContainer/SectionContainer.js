import  './SectionContainer.css'
import SectionWithIcons from "./SectionWithIcons/SectionWithIcons";
import BlockHowItWorks from "./BlockHowItWorks/BlockHowItWorks";
import BestHousesBlock from "./BestHousesBlock/BestHousesBlock";
import BlockFastForward from "./BlockFastForward/BlockFastForward";

export default function SectionContainer() {
    return (
        <div className='container'>
            <SectionWithIcons/>
            <BlockHowItWorks/>
            <BestHousesBlock/>
            <BlockFastForward/>
        </div>
    )
}