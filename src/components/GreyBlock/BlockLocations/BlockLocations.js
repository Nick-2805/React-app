import './BlockLocations.css'
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import CardElem from "../../CardElem/CardElem";
import BlockLocationsItems from "./BlockLocationsItems/BlockLocationsItems";
import SectionWithPhotoContentLinks from "../../SectionWithPhotoContentLink/SectionWithPhotoContentLink";

export default function BlockLocations() {
    return (
        <div className='BlockLocations'>
            <HeaderBlock
                titleText='Locations'
                description='Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna, aliquet non nisl sit amet.'
            />
            <BlockLocationsItems/>
            <SectionWithPhotoContentLinks/>
        </div>
    )
}