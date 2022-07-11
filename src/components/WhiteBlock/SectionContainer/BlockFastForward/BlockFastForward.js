import './BlockFastForward.css'
import SectionWhitPhoto from "../../../SectionWhitPhoto/SectionWhitPhoto";
import HeaderBlock from "../../../HeaderBlock/HeaderBlock";
import SectionWithInfoItem from "../BlockHowItWorks/SectionWithInfo/SectionWithInfoItem/SectionWithInfoItem";
import icon4 from "../../../assets/icons/payments.svg";
import icon5 from "../../../assets/icons/description.svg";
import SectionWithPhotoContentLinks from "../../../SectionWithPhotoContentLink/SectionWithPhotoContentLink";
import img from '../../../assets/img/3.jpg'

export default function BlockFastForward() {
    return (
        <div className='BlockFastForward'>
            <SectionWhitPhoto
                variant='reverse'
                start={(<div>
                        <HeaderBlock
                            preTitle='Quick and easy'
                            titleText='Fast forward process'
                            description='Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl.'
                        />
                        <div className='BlockFastForward_info'>
                            <SectionWithInfoItem
                                icon={icon4}
                                titleText='Affordable prices'
                                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
                            />
                            <SectionWithInfoItem
                                icon={icon5}
                                titleText='Less paper work'
                                description='Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi.'
                            />
                        </div>
                        <SectionWithPhotoContentLinks/>
                    </div>
                )}
                img={img}
            />
        </div>
    )
}