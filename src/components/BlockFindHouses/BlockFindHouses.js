import HeaderBlock from "../HeaderBlock/HeaderBlock";
import FormBlock from "../FormBlock/FormBlock";
import house1 from '../assets/img/house1.jpg'
import SectionWhitPhoto from "../SectionWhitPhoto/SectionWhitPhoto";

export default function BlockFindHouses() {
    return (
        <SectionWhitPhoto
            startP='center'
            start={(
                <div>
                    <HeaderBlock
                        headerB = 'block'
                        preTitle='Find your dream place'
                        titleText='Find house for your family in minutes'
                        description='Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.'
                    />
                    <FormBlock/>
                </div>
            )}
            img={house1}
        />
    )
}