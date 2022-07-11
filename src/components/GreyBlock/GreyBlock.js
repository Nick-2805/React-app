import './GreyBlock.css'
import HousesAreaBlock from "./HousesAreaBlock/HousesAreaBlock";
import BlockLocations from "./BlockLocations/BlockLocations";
import DarkBlock from "../DarkBlock/DarkBlock";

export default function GreyBlock() {
    return (
        <div className='GreyBlock'>
            <div className='container'>
                <HousesAreaBlock/>
                <BlockLocations/>
                <DarkBlock/>
            </div>
        </div>
    )
}