import './BestHousesBlock.css'
import SectionWhitPhoto from "../../../SectionWhitPhoto/SectionWhitPhoto";
import HeaderBlock from "../../../HeaderBlock/HeaderBlock";
import SectionWithPhotoContentLinks from "../../../SectionWithPhotoContentLink/SectionWithPhotoContentLink";
import img2 from '../../../assets/img/2.jpg'
export default function BestHousesBlock() {
    return (
        <div className='BestHousesBlock'>
            <SectionWhitPhoto
                start={(
                    <div>
                        <HeaderBlock
                            preTitle='Comfort first'
                            titleText='The best houses for family comfort'
                            description='Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.'
                        />
                        <SectionWithPhotoContentLinks/>
                    </div>
                )}
                img={img2}
            />
        </div>
    )
}