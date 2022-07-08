import Header from '../Header/Header';
import SectionWithPhoto from '../SectionWithPhoto/SectionWithPhoto';
import SectionWithPhotoContent from '../SectionWithPhoto/SectionWithPhotoContent/SectionWithPhotoContent';
import SectionWithPhotoImage from "../SectionWithPhoto/SectionWithPhotoImage/SectionWithPhotoImage";
import SectionWithPhotoContentForm
    from "../SectionWithPhoto/SectionWithPhotoContent/SectionWithPhotoContentForm/SectionWithPhotoContentForm";
import img_1 from '../assets/img/1.jpg'
import bcg from '../assets/img/bcg.svg'
import img_2 from '../assets/img/2.jpg'
import img_3 from '../assets/img/3.jpg'

import payments from '../assets/icons/payments.svg'
import description from '../assets/icons/description.svg'
import house from '../assets/icons/house.svg'
import receipt from '../assets/icons/receipt.svg'
import key from '../assets/icons/key.svg'


import SectionWithPhotoContentInfo
    from "../SectionWithPhoto/SectionWithPhotoContent/SectionWithPhotoContentInfo/SectionWithPhotoContentInfo";
import SectionWithPhotoContentInfoItem
    from "../SectionWithPhoto/SectionWithPhotoContent/SectionWithPhotoContentInfo/SectionWithPhotoContentInfoItem/SectionWithPhotoContentInfoItem";
import SectionWithPhotoContentLink
    from "../SectionWithPhoto/SectionWithPhotoContent/SectionWithPhotoContentLink/SectionWithPhotoContentLink";
import SectionWithTextItem from "../SectionWithTextItems/SectionWithTextItem";

import './App.css';
import SectionWithIcons from "../SectionWithIcons/SectionWithIcons";

import icon1 from '../assets/icons/icon1.svg'
import icon2 from '../assets/icons/icon2.svg'
import icon3 from '../assets/icons/icon3.svg'
import icon4 from '../assets/icons/icon4.svg'
import icon5 from '../assets/icons/icon5.svg'
import house1 from '../assets/img/house1.jpg'
import geo from '../assets/icons/place.svg'
import bath from '../assets/icons/bathtub.svg'
import bed from '../assets/icons/bed.svg'
import area from '../assets/icons/square_foot.svg'
import family from '../assets/icons/family.svg'
import PreTitleDiv from "../PreTitle/preTitle";
import CardElem from "../CardElem/CardElem";
import SectionWithPhotoContentLinks
    from "../SectionWithPhoto/SectionWithPhotoContent/SectionWithPhotoContentLink/SectionWithPhotoContentLink";
import SectionDark from "../SectionDark/SectionDark";
import Button from "../Button/Button";

function App() {
    return (
        <div className="App">
            <Header/>
            <SectionWithPhoto
                start={(<SectionWithPhotoImage
                    img={img_1}
                    variant3='v3'
                />)}
                end={(<SectionWithPhotoContent
                    // PreTitle='Find your dream place'
                    preTitleDiv={(<PreTitleDiv
                        preTitle='Find your dream place'
                    />)}
                    title='Find house for your family in minutes'
                    text='Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.'
                    endForm={(<SectionWithPhotoContentForm/>)}
                />)}
                variant='reverse'
                img={bcg}
                bcg='grey'
            />
            <div className="wrapper_light">
                <div className="container">
                    <div className='SectionWithTextItems'>
                        <SectionWithIcons
                            text="As seen on the world's best magazines and media"
                            icon1={icon1}
                            icon2={icon2}
                            icon3={icon3}
                            icon4={icon4}
                            icon5={icon5}
                        />
                        <h3 className='SectionTitle'>How it works</h3>
                        <div className='SectionWithTextItemsDesc'>
                            <p>Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque.
                                Maecenas
                                varius felis felis.</p>
                        </div>
                        <div className='SectionWithTextItem-block'>
                            <SectionWithTextItem
                                icon={house}
                                title='Find property'
                                text='Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.'
                            />
                            <SectionWithTextItem
                                icon={receipt}
                                title='Make a deal'
                                text='Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi.'
                            />
                            <SectionWithTextItem
                                icon={key}
                                title='Get your keys'
                                text='Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat.'
                            />
                        </div>
                    </div>
                    <SectionWithPhoto
                        variant='reverse'
                        start={(<SectionWithPhotoImage
                            img={img_2}
                            variant='v2'
                        />)}
                        end={(<SectionWithPhotoContent
                            preTitleDiv={(<PreTitleDiv
                                preTitle='Comfort first'
                            />)}

                            title='The best houses for family comfort'
                            text='Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.'
                            endInfo={(<SectionWithPhotoContentInfo/>)}
                            endButtons={(<SectionWithPhotoContentLink/>)}
                        />)}
                    />
                    <SectionWithPhoto
                        start={(<SectionWithPhotoImage
                            img={img_3}
                            variant='v2'
                        />)}
                        end={(<SectionWithPhotoContent
                            preTitleDiv={(<PreTitleDiv
                                preTitle='Quick and easy'
                            />)}
                            title='Fast forward process'
                            text='Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl.'
                            endInfo={(<SectionWithPhotoContentInfo
                                item1={(<SectionWithPhotoContentInfoItem
                                    icon={payments}
                                    title='Affordable prices'
                                    content='Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Suspendisse varius enim in eros.'
                                />)}
                                item2={(<SectionWithPhotoContentInfoItem
                                    icon={description}
                                    title='Less paper work'
                                    content='Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi.'
                                />)}
                            />)}
                            endButtons={(<SectionWithPhotoContentLink/>)}
                        />)}
                    />
                </div>
                <div className="wrapper_grey">
                    <div className="container">
                        <div className='SectionWithHouses'>
                            <PreTitleDiv
                                preTitle='Properties'
                            />
                            <h3 className='SectionTitle'>Houses in your favorite area</h3>
                            <div className="CardElemBlocks">
                                <CardElem
                                    img={house1}
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
                                    img={house1}
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
                                    img={house1}
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
                                    img={house1}
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
                                    img={house1}
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
                                    img={house1}
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
                            </div>
                            <SectionWithPhotoContentLinks/>
                        </div>
                        <div className='SectionWithTextItems'>
                            <h3 className='SectionTitle'>Locations</h3>
                            <div className='SectionWithTextItemsDesc'>
                                <p>Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna,
                                    aliquet
                                    non
                                    nisl
                                    sit amet.</p>
                            </div>
                            <div className='SectionWithTextItem-block_l'>
                                <SectionWithTextItem
                                    varblock='l'
                                    varIcon='none'
                                    varTitle='l'
                                    title='San Francisco, CA'
                                    text='View Properties'
                                />
                                <SectionWithTextItem
                                    varblock='l'
                                    varIcon='none'
                                    varTitle='l'
                                    title='Los Angeles, CA'
                                    text='View Properties'
                                />
                                <SectionWithTextItem
                                    varblock='l'
                                    varIcon='none'
                                    varTitle='l'
                                    title='San Diego, CA'
                                    text='View Properties'
                                />
                                <SectionWithTextItem
                                    varblock='l'
                                    varIcon='none'
                                    varTitle='l'
                                    title='New York, NY'
                                    text='View Properties'
                                />
                                <SectionWithTextItem
                                    varblock='l'
                                    varIcon='none'
                                    varTitle='l'
                                    title='Las Vegas, NV'
                                    text='View Properties'
                                />
                                <SectionWithTextItem
                                    varblock='l'
                                    varIcon='none'
                                    varTitle='l'
                                    title='Miami, FL'
                                    text='View Properties'
                                />
                            </div>
                            <SectionWithPhotoContentLinks/>
                        </div>
                        <SectionDark
                            img={family}
                            title={<h3 className='SectionTitle light'>Locations</h3>}
                            desc={<div className='SectionWithTextItemsDesc light'>
                                <p>Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, placerat vel
                                    arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.</p>
                            </div>}
                            btn={<Button
                                text='Get started'
                            />}
                        />
                    </div>
                </div>
                <div className="wrapper_light">

                </div>
            </div>
        </div>
    )
}

export default App;
