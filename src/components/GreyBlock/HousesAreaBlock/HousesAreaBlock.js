import './HousesAreaBlock.css'
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import CardElem from "../../CardElem/CardElem";
import img1 from '../../assets/img/1.1.jpg'
import img2 from '../../assets/img/house2.jpg'
import img3 from '../../assets/img/house3.jpg'
import img4 from '../../assets/img/house4.jpg'
import img5 from '../../assets/img/house5.jpg'
import img6 from '../../assets/img/house6.jpg'
import geo from '../../assets/icons/place.svg'
import bath from '../../assets/icons/bathtub.svg'
import bed from '../../assets/icons/bed.svg'
import area from '../../assets/icons/square_foot.svg'
import SectionWithPhotoContentLinks from "../../SectionWithPhotoContentLink/SectionWithPhotoContentLink";


export default function HousesAreaBlock() {
    return (
        <div className='HousesAreaBlock'>
            <HeaderBlock
                preTitle='Properties'
                titleText='Houses in your favorite area'
            />
            <div className='HousesAreaBlock_cards'>
                <CardElem
                    img={img1}
                    title='Cozy studio in Los Angeles'
                    price='$ 1,200.00 USD'
                    geo={geo}
                    place='2263 Southlea, Los Angeles'
                    bath={bath}
                    bathNum='2'
                    bed={bed}
                    bedNum='2'
                    area={area}
                    areaNum='840 sqft'
                />
                <CardElem
                    img={img2}
                    title='Tiny home in San Diego'
                    price='$ 740,000.00 USD'
                    geo={geo}
                    place='2569 El Segundo, San Diego'
                    bath={bath}
                    bathNum='1'
                    bed={bed}
                    bedNum='2'
                    area={area}
                    areaNum='400 sqft'
                />
                <CardElem
                    img={img3}
                    title='Cozy studio in Los Angeles'
                    price='$ 980,000.00 USD'
                    geo={geo}
                    place='4489 Smity Fielda, New York'
                    bath={bath}
                    bathNum='2'
                    bed={bed}
                    bedNum='4'
                    area={area}
                    areaNum='3200 sqft'
                />
                <CardElem
                    img={img4}
                    title='Family house in Los Angeles'
                    price='$ 4,200.00 USD'
                    geo={geo}
                    place='2263 Southlea, Los Angeles'
                    bath={bath}
                    bathNum='2'
                    bed={bed}
                    bedNum='3'
                    area={area}
                    areaNum='1400 sqft'
                />
                <CardElem
                    img={img5}
                    title='Family house in Los Angeles'
                    price='$ 4,200.00 USD'
                    geo={geo}
                    place='2263 Southlea, Los Angeles'
                    bath={bath}
                    bathNum='2'
                    bed={bed}
                    bedNum='3'
                    area={area}
                    areaNum='1400 sqft'
                />
                <CardElem
                    img={img6}
                    title='Family house in Los Angeles'
                    price='$ 4,200.00 USD'
                    geo={geo}
                    place='2263 Southlea, Los Angeles'
                    bath={bath}
                    bathNum='2'
                    bed={bed}
                    bedNum='3'
                    area={area}
                    areaNum='1400 sqft'
                />
            </div>
            <SectionWithPhotoContentLinks/>
        </div>
    )
}